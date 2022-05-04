import ImageLinkForm from "../Components/ImageLinkForm";
import FaceRecognition from "../Components/FaceRecognition";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="title ">
        <h1 >M </h1>
        <h1 >E </h1>
        <h1 >M </h1>
        <h1 >E </h1>
        <h1 >D </h1>
      </div>     
        <ImageLinkForm />
        <FaceRecognition />
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.section`
  min-height: 90vh;

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
