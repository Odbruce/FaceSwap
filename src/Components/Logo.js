import { useMatch } from "react-router-dom";
import { useGlobalContext } from "./Context/ContextProvider";
import { useFireContext } from "./Context/FirebaseContext";
import styled from "styled-components";

const Logo = () => {
  const homie = useMatch("/home");
  const memie = useMatch("/memes");
  const {emojied } = useGlobalContext();
  const {meme} = useFireContext();

  const sad =
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/pensive-face_1f614.png";
  const happy =
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/slightly-smiling-face_1f642.png";
  return (
    <Wrapper>
       <div className={!homie ? "no_flip" : "flip-card-inner"}>
        <div className="flip_card_front">
          <img
            className={memie ? (meme.length < 1 ? "sad" : "") : ""}
            src={memie ? (meme.length < 1 ? sad : happy) : happy}
            alt="emoji"
          />
        </div>
        <div className="flip_card_back cursor">
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/beaming-face-with-smiling-eyes_1f601.png"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/smiling-face-with-heart-eyes_1f60d.png"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/face-with-raised-eyebrow_1f928.png"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/face-with-tears-of-joy_1f602.png"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-54.gif"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-79.gif"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-3.gif"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://c.tenor.com/RBJBzWKPdpQAAAAM/pepe-laugh.gif"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/loudly-crying-face_1f62d.png"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://acegif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-40.gif"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/grinning-squinting-face_1f606.png"
            onClick={emojied}
            alt="emoji"
          />
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/face-with-hand-over-mouth_1f92d.png"
            onClick={emojied}
            alt="emoji"
          />
          <a
            className="explore"
            href="https://emojipedia.org/people"
            target="_blank"
            rel="noopener noreferrer"
          >
            explore
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Logo;

const Wrapper = styled.section`
  background-color: transparent;
  width: 10vw;
  height: 10vw;
  z-index: 1;
  perspective: 1000px;
  margin: 2%;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-inner,
  .no_flip {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;    
    -moz-backface-visibility: hidden;
    transform-origin: center;
    transform-style: preserve-3d;    

    .flip_card_front,
    .flip_card_back {
      position: absolute;
      width: 100%;
      height: 100%;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .flip_card_front {
      color: black;
    
      .sad {
          filter: grayscale(0.8);
        }
      img {
        width: 10vw;
        height: 10vw;
      }  
    }
    .flip_card_back {
      background-color: transparent;
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap: 1em;
      height: fit-content;
      transform: rotateY(180deg);

      img {
        height: 3em;
        width: 3em;
      }

      .explore {
        font-weight:bold;
        font-family:"segoe UI"; 
        text-decoration: none;
        color:rgb(40,36,228,.8);
        color:whitesmoke;
        text-transform: capitalize;
        position:relative;

        &:hover:after{
          transform:scaleX(1);
        }
        
        &:after{
          content:"";
          width:100%;
          height:2px;
          position:absolute;
          right:0;
          bottom:0;
          background:black;
          transform:scaleX(0);
          transform-origin:right;
          transition:0.3s;
          
        

        }


      }
      @media screen and (max-width: 830px) {
        width: 3em;

        img{
          height: 1em;
          width: 1em;
        }        
      }
    }
  }
}

`