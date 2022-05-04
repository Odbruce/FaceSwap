import styled from "styled-components";
import { useGlobalContext } from "./ContextProvider/ContextProvider";
import { useFireContext } from "./FirebaseContext";

const FaceRecognition = () => {
  const {user} = useFireContext()
  const {
    Face,
    up,
    angle,
    emojiChange,
    emojiInput,
    angled,
    flipped,
    emojied,
    memed,
  } = useGlobalContext();


  return (
    <Wrapper>
      <div className="output-inner">
        {Face&&<div className="img-container">
          <img src={Face} alt="" className="img_face" />
          {up}
        </div>}
        <div className="control">
          <div className="title">

          <h3>C</h3>
          <h3>o</h3>
          <h3>n</h3>
          <h3>t</h3>
          <h3>r</h3>
          <h3>o</h3>
          <h3>l</h3>
          <h3>s</h3>

          </div>

          <input
            className="rotate-bar "
            type="range"
            min="-180"
            max="180"
            value={angle}
            onChange={angled}
          />
          <div className="emoji ">
            <input
              className="emoji-input"
              type="text"
              placeholder="Emoji..."
              value={emojiInput}
              onChange={emojiChange}
            />
            <button onClick={emojied}>+</button>
          </div>
          <div >
            <button className="btn" onClick={flipped}>
              Flip
            </button>{" "}
            <button disabled = {!user} className={!user?"disabled-btn ":"btn"} onClick={memed}>
              Save{console.log(Face,user)}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaceRecognition;

const Wrapper = styled.section `
  width: fit-content;
  margin: 0 auto;
  .output-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.5rem;
    width: 50vw;

    .img-container {
      position: relative;
      width: fit-content;
      margin-bottom:1rem;

      &::after {
        content: "";
        position: absolute;
        background: transparent;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .img_face {
        position: relative;
        height: auto;
        width: 350px;
        max-width: 400px;
      }
    }
    .control {
      font-size:1rem;
      letter-spacing:.15rem;
      display: inherit;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-radius: 5%;
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);
      width: 150px;
      background: #463c46;
      background:#ECD689;
      background:#D9C46C;
      margin: 0 1.5rem ;
      height: 200px;
      padding:1rem .5rem;
      
      @media screen and (max-width:830px){
        // margin-bottom:60vh;
      }
     
      .title{
      font-family: 'Indie Flower', cursive;
      font-size:1.5rem;
      margin:0;

        h3 {
          margin: 0;
          margin-bottom: 0.7em;
          text-align:center;
          color: thistle;
  
          &:nth-of-type(1){color:#ec898f}
          &:nth-of-type(2){color:#9789ec}
          &:nth-of-type(3){color:#f39a18}
          &:nth-of-type(4){color:#000000}
          &:nth-of-type(5){color:green}
          &:nth-of-type(6){color:#9789ec}
          &:nth-of-type(7){color:#f39a18}
          &:nth-of-type(8){color:rgb(19, 18, 18, 0.7)}
  
        }
       }
      .rotate-bar {
        height: 0;
        outline: none;
        border: solid grey 1px;
        margin-bottom: 0.6em;
        appearance: none;
        width:130px;
      
        &::-webkit-slider-thumb {
          appearance: none;
          background: rgb(19, 18, 18, 0.7);
          // background:thistle;
          width: 2px;
          height: 20px;
          width:0;
          height:0;
          border:10px solid transparent;
          background:transparent;
          border-top:0;
          border-bottom:20px solid rgb(19, 18, 18);
          border-radius:50%;
          cursor: pointer;
        }
        &::-moz-range-thumb{
          appearance: none;
          background: rgb(19, 18, 18, 0.7);
          // background:thistle;
          width: 2px;
          height: 20px;
          width:0;
          height:0;
          border:10px solid transparent;
          background:transparent;
          border-top:0;
          border-bottom:20px solid rgb(19, 18, 18);
          border-radius:50%;
          cursor: pointer;
        }
      }
      .emoji {
        display: flex;
        padding: 0 5px 0 5px;
        margin-bottom: 0.6em;
      
        .emoji-input {
          width: 75%;
          border: 0;
          border-bottom: 1px solid grey;
          background: transparent;
          border-radius:0;
          outline: none;
          color: thistle;
        }

        &::placeholder {
          color: red;
        }
        button {
          background: rgb(19, 18, 18, 0.7);
          border: none;
          padding: 2px 10px;
          color: thistle;
        }
      }
      .btn {
        font-family: 'Indie Flower', cursive;
        font-size:1rem;
        font-weight:bold;
        letter-spacing:.15rem;
        width: fit-content;
        padding: 0.4em;
        outline: none;
        cursor: pointer;
        background: transparent;
        border: grey solid 1px;
        color: rgb(230, 220, 230);

        &:nth-of-type(1){
            background:rgb(40,36,228,.1);
            color:rgb(19, 18, 18, 0.7);
          // color:;

          &:hover{
            background:#b4ec89;
            color:#ffff;
            background:rgb(40,36,228,.4);

          }
        }
        &:nth-of-type(2){
          color:rgb(40,36,228,.8);
          background:rgba(180,236,137,0.5);

          &:hover{
            background:rgb(40,36,228,.8);
            color:#ffff;
            background:#b4ec89;
            color:rgba(0,0,0,0.9);
          }
        }

      }

      .disabled-btn{ 
        font-family: 'Indie Flower', cursive;
        font-size:1rem;
        font-weight:bold;
        letter-spacing:.15rem;
        width: fit-content;
        padding: 0.4em;
        outline: none;
        cursor: pointer;
        background: transparent;
        border: grey solid 1px;
          &:nth-of-type(1){
          color:black;
          background:grey;

        }
      }
     
    }
}
`