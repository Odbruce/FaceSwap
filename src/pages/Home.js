import ImageLinkForm from "../Components/ImageLinkForm";
import FaceRecognition from "../Components/FaceRecognition";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/Context/ContextProvider";

const Home = () => {

  const {modal,dispatch}= useGlobalContext();

  useEffect(() => {
    let mode = setTimeout(() => {
      dispatch({type:"MODAL",payload:""});
    }, 3000);
    return () => {
      clearTimeout(mode);
    };
  }, [modal]);

 

  return (
    <Wrapper>
      {modal==="not_signedin"||modal==="no_img"?
        <motion.div initial={{opacity:0,}} animate={{opacity:1,}} transition={{duration:0.4}} className="modal">
          <h3>Can't perform action: 
            {modal==="not_signedin"?" Please sign-in and try again":
            " Please make sure you've imported an image"}
          </h3>
        </motion.div>:null
      }
      <motion.div  className="title ">
        <motion.h1 initial={{y:-40}} animate= {{y:0,x:[20,0],rotateZ:-36}} whileHover={{scale:1.5,rotateZ:0,}}  transition={{stiffness:180,type:"spring",damping:5}} >M </motion.h1>
        <motion.h1 initial={{opacity:0,y:-60}} animate= {{y:0,opacity:[0,0,1]}} whileHover={{scale:1.5,rotateZ:36,transition:{type:"spring",stiffness:180,damping:5}}} transition={{stiffness:180,type:"spring",}} >E </motion.h1>
        <motion.h1  initial={{opacity:0}} animate= {{opacity:[0,0,0,0,1]}} whileHover={{scale:1.5,transition:{type:"spring",stiffness:180,damping:5}}} transition={{stiffness:180,type:"spring"}} >M </motion.h1>
        <motion.h1 initial={{y:-40}} animate= {{y:0,rotateZ:-24}} whileHover={{scale:1.5,rotateZ:0,transition:{type:"spring",stiffness:180,damping:5}}} transition={{stiffness:180,type:"spring"}} >E </motion.h1>
        <motion.h1  animate= {{y:[-60,0,0,10],rotateZ:50,x:[0,10,]}} whileHover={{scale:1.5,rotateZ:0,}} transition={{stiffness:180,type:"spring",damping:5,} } >D </motion.h1>
      </motion.div>     
        <ImageLinkForm />
        <FaceRecognition />
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.section`
  min-height: 90vh;

  .modal{
    position:fixed;
    color:rgb(255,255,255,0.8);
    font-size: clamp(9px, calc(7px + 0.5vw), 16px);
    font-family:"segoe UI";
    display:flex;
    align-items:center;
    justify-content:center;
    top:0;
    width:60%;
    left:0;right:0;
    margin:0 auto;
    min-height:32px;
    z-index:6;
    padding:1em;
    background:#E0644B;

    h3{
    text-align:center;
    letter-spacing:1.5px;
    }
  }
  
 .title{
  display:flex;
  font-family:  sans-serif;
  color: #f39a18;
  justify-content:center;
  margin-bottom: .5em;
  font-size:min(6.6vw,13.5vw);
  letter-spacing: 6px;
  text-align: center;
  
  h1{
  
    &:nth-of-type(1){
      color:#ec898f;
    }
    &:nth-of-type(2){
      color:#9789ec;
    }
    &:nth-of-type(3){
      color:#ecd689;
    }
    &:nth-of-type(4){
      color:#b4ec89;
    }
  }
  
}
@media screen and (max-width:830px){  
 .title{margin-top:9vh;
   font-size:13.5vw;
  }
}

`
