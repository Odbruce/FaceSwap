import { useFireContext } from "../Components/FirebaseContext";
import { MemeComponent } from "../Components/MemeComponent";
import { useState } from "react";
const Memes = () => { 
  // const {loading} =  useFireContext();
console.log("memes")
  return<>
  <MemeComponent/>
  </>
};
export default Memes;
