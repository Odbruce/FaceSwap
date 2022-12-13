export const reducer = (state, action) => {
  if (action.type === "FACE_CHANGE") {
    
    return { ...state, Face: action.payload };
  }
  if(action.type === "LOAD"){
    
    return {...state,Load:action.payload};
  }

  if(action.type === "MODAL"){
    return {...state,modal:action.payload};
  }

  if(action.type === "URL"){
    return {...state,url:action.payload};
  }
  if(action.type=== "LOADING"){
    return {...state,isLoading:action.payload};
  }
  
  if (action.type === "KEY") {
    
    return { ...state, key: action.payload };
  }
  if (action.type === "FETCH") {
    return { ...state, BoundingBox: action.payload };
  }

  if (action.type === "MAP") {
    return { ...state, up: action.payload };
  }
  if (action.type === "TURN") {
    return {
      ...state,
      turn: { ...state.turn, [state.key]: `rotate(${action.payload}deg)` },
    };
  }
  if (action.type === "SCALE") {
    return { ...state, sc: state.sc !== "scaleX(-1)" ? `scaleX(-1)` : "" };
  }
  if (action.type === "FLIP") {
    return { ...state, flip: { ...state.flip, [state.key]: state.sc } };
  }

  if (action.type === "EMOJIED") {
    
    return {
      ...state,
      emoji: { ...state.emoji, [state.key]: action.payload },
      flip: { ...state.flip, [state.key]: "" },
      turn: { ...state.turn, [state.key]: `rotate(0deg)` },
    };
  }
  if(action.type === "CLEAR_EMOJI"){
    
    return{...state,emoji:""};
  }

  if(action.type === "SET_IMG"){
    return {
      ...state, img:""
    };
  }
  if(action.type === "INPUT_CHANGE"){
    
    return {
      ...state,img: action.payload
    };
  }
  if(action.type === "ANGLE"){
    return {
      ...state,angle: action.payload
    };
  }
  if(action.type === "EMOJI_CHANGE"){
    return {
      ...state,emojiInput: action.payload
    }
  };
  if(action.type === "SET_EMOJI_INPUT"){
    return {
      ...state,emojiInput : ""
    };
  }
  if(action.type === "CLEAR_FACE"){
    return {
      ...state,Face:null
    };
  }
  if(action.type ==="FILTERED") {
    return {
      ...state,meme:action.payload
    };
  }
};

    // if (action.type === "MEMED") {
    //   return {
    //     ...state,
    //     meme: [
    //       ...state.meme,
    //       { Face: state.Face, emojiStyle: action.payload, id: Date.now() },
    //     ],
    //     Face: "",
    //     emoji: "",
    //   };
    // }