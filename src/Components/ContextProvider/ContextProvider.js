import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "../Reducer/reducer";


const defaultState = {
  Face: null,
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

  const { Face, emojiInput, img, BoundingBox, up, flip, turn, emoji } = state;

  //  home handling
  useEffect(() => {
    const raw = JSON.stringify({
      user_app_id: {
        user_id: "apeman1429_1",
        app_id: "4757eb4236c54745a58c9604585355ad",
      },
      inputs: [
        {
          data: {
            image: {
              url: Face,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key a36801c4467b40d49d61963f66f051ef",
      },
      body: raw,
    };
    Face &&
      fetch(
        "https://api.clarifai.com/v2/models/face-detection/versions/fe995da8cb73490f8556416ecf25cea3/outputs",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) =>
          dispatch({
            type: "FETCH",
            payload: JSON.parse(result, null, 2).outputs[0].data.regions.map(
              (item) => {
                const {
                  id,
                  region_info: {
                    bounding_box: { top_row, bottom_row, right_col, left_col },
                  },
                } = item;
                let tp,lt, ht, wt;
                tp = `${100 * top_row - 3}%`;
                lt = `${100 * left_col - 2}%`;
                ht = `${(bottom_row - top_row) * 100 + 5}%`;
                wt = `${(right_col - left_col) * 100 + 4}%`;

                return { id, tp, lt, wt, ht };
              }
            ),
          })
        )
        .catch((error) => console.log("error", error));
  }, [Face]);


  // picking out faces and styling;
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
            width: wt,
            backgroundImage: emoji[id],
            position:"absolute",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius:" 50%",
          };

          return (
            <div
              key={id}
              id={id}
              className="bounding-box"
              style={style}
              onClick={() => {
                dispatch({ type: "KEY", payload: id });
              }}
            ></div>
          );
        }),
      });
  }, [BoundingBox, turn, emoji, flip]);


  
  const FaceChange =  (e) => {
    e.preventDefault();
    dispatch({
      type: "FACE_CHANGE",
      payload: img,
    });
   dispatch({type:"SET_IMG"});
  };

  const inputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log("input_change")
    // setImg(value);
    dispatch({type:"INPUT_CHANGE",payload:value})
    return;
  };
  //face emoji handling
  const angled = (e) => {
    const { value } = e.target;
    // setAngle(value);
    dispatch({type:"ANGLE",payload: value})
    dispatch({ type: "TURN", payload: value });
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
    console.log(src);    
    dispatch({ type: "EMOJIED", payload: src ? src : emojiInput });
    dispatch({type:"SET_EMOJI_INPUT"})
  };

  const memed = () => {
    if(user){
      console.log(user);
      addMeme(up,Face);
      // Face && dispatch({ type: "MEMED", payload: emojiStyle });
      // document.location.reload(true);
       dispatch({type:"CLEAR_FACE"});
       dispatch({type:"CLEAR_EMOJI"});

    }
  };

  const toggle = () => {
    const form = document.getElementById("form_toggle");
    form.classList.toggle("toggle");
    console.log(form);
  };


  return (
    <AppContext.Provider
      value={{
        ...state,
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
