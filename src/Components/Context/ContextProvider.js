import React, { useContext, useReducer, useEffect, useState, useRef } from "react";
import { getDimension } from "../../Utilities";
import { reducer } from "../Reducer/reducer";


const defaultState = {
  Face: null,
  modal:"",
  Load:null,
  isLoading:false,
  url:"",
  BoundingBox: [],
  sc: [],
  up: [],
  flip: "",
  turn: "",
  meme: [],
  emoji: "",
  key: "",
  img:"",
  emojiInput:"",
  angle:"",
};
const AppContext = React.createContext();
const ContextProvider = ({ children,addMeme,user }) => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  

  const { Face,Load,emojiInput,BoundingBox, up, flip, turn, emoji } = state;

  //  Api handling
useEffect(()=>{
     const isBase64 = ()=>{
     
      if(Load.slice(0,4) == "http"){IMAGE_BYTES_STRING = Load; PROP = "url"; return; } 
      else{IMAGE_BYTES_STRING = Load; PROP = "base64";return;};
    }
    const USER_ID = process.env.REACT_APP_USER_ID;
    const PAT = process.env.REACT_APP_PAT;
    const APP_ID = process.env.REACT_APP_APP_ID;
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = 'fe995da8cb73490f8556416ecf25cea3';
    let IMAGE_BYTES_STRING, PROP;

    Load&&isBase64();

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        [PROP]: IMAGE_BYTES_STRING
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    const fetched = async ()=>{ 
      try { dispatch({type:"LOADING",payload:true});
          let response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
          let result = await response.text();


          dispatch({type:"LOADING",
                    payload:false
                  });

          dispatch({  type: "FETCH",
                      payload: getDimension(result), 
                    })
      }
      catch (error){ return;}
    }
    Load&&fetched();
},[Load])


  useEffect(() => {
    BoundingBox.length > 0 &&
      dispatch({
        type: "MAP",
        payload: BoundingBox.map((item) => {
          const { id, tp, lt, ht, wt } = item;

          let style = {
            top: tp,
            width: wt,
            left: lt,
            height: ht,
            transform: `${turn[id]} ${flip[id]}`,
            position:"absolute",
            backgroundImage:`url(${emoji[id]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius:" 50%",
          };
          return (
            <div
            className="cursor"
              key={id}
              id={id}
              style={style}
              onClick={() => {
                dispatch({ type: "KEY", payload: id });
              }}
            ></div>
          );
        }),
      });
  }, [BoundingBox, turn, emoji, flip]);

  const FaceChange =  (img,byte) => {
    dispatch({
      type: "FACE_CHANGE",
      payload:img,
    });

    dispatch({
      type:"LOAD",
      payload:img.slice(0,4) !== "http"?byte:img
    });

    dispatch({type:"SET_IMG"});
  };

  const inputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch({
      type:"URL",
      payload:value
    });

    dispatch({
      type:"INPUT_CHANGE",
      payload:value
    })

    return;
  };
  //face emoji handling
  const angled = (e) => {
    const { value } = e.target;
    // setAngle(value);
    dispatch({
      type:"ANGLE",
      payload: value
    })
    dispatch({
      type: "TURN",
      payload: value
    });
  };

  const flipped = () => {
    dispatch({ type: "SCALE" });
    dispatch({ type: "FLIP" });
  };

  const emojiChange = (e) => {
  dispatch({type:"EMOJI_CHANGE",payload:e.target.value});
}

  const emojied = (e) => {
    const { src } = e.target;
    
    dispatch({
      type: "EMOJIED",
      payload: src ? src : emojiInput
    });
    dispatch({type:"SET_EMOJI_INPUT"})
  };

  const memed = () => {
    if(user){
      console.log(up,Face)
      
      addMeme(up,Load);
       URL.revokeObjectURL(Face);
       dispatch({type:"CLEAR_FACE"});
       dispatch({type:"CLEAR_EMOJI"});
    }
  };

  const toggle = () => {
    const form = document.getElementById("form_toggle");
    form.classList.toggle("toggle");
  }; 


  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        toggle,
        emojiChange,
        inputChange,
        emojiInput,
        FaceChange,
        angled,
        flipped,
        emojied,
        memed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { ContextProvider, AppContext };
