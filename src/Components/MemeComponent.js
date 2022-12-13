import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RiDeleteBin6Line as Bin } from "react-icons/ri";
import { useEffect} from "react";
import { useFireContext } from "./Context/FirebaseContext";
import {
  Loading,
} from "../Utilities";

export const MemeComponent = () => {
  const { getMemes, meme, del, loading } = useFireContext();
  



const base64ToUrl = (b64Data)=>{
 
const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = window.atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

const blob = b64toBlob(b64Data);
const blobUrl = URL.createObjectURL(blob);
return blobUrl;}

  
  useEffect(() => {
    getMemes();
  }, []);
  return (
    <Wrapper className="meme">
      <div className={meme.length < 1 ? "h" : "not-empty"}>
        <h1>G</h1>
        <h1>A</h1>
        <h1>L</h1>
        <h1>L</h1>
        <h1>E</h1>
        <h1>R</h1>
        <h1>Y</h1>
      </div>

      <div className="gallery">
        {loading ? (
          <Loading />
        ) : meme.length < 1 ? (
          <div className="empty-meme">
            <img
              src="https://img.icons8.com/ios/150/f5eff5/no-image-gallery.png"
              alt="empty-img"
            />{" "}
            <h4>
              Oops you currently have no saved memes, lets fix{" "}
              <Link className="link_home" to="/">
                <span>this</span>
              </Link>
            </h4>
          </div>
        ) : (
          meme.map((item) => {
            const { Face, style, id } = item;
            const url =Face.slice(0,4) !== "http"? base64ToUrl(Face):Face;
            return (
              <section key={id} id={id} className="img-container">
                <div
                  onClick={() => {
                    del(id);
                  }}
                >
                  <Bin className="bin" />
                </div>
                <img
                  src={url}
                  alt="meme-face"
                  className="img_face"
                />

                {style.map((item, index) => {
               
                  return (
                    <div
                      key={index}
                      style={item}
                    ></div>
                  );
                })}
               
              </section>
            );
          })
        )}
      </div>
    </Wrapper>
  );
};
const mem = keyframes`
to {
  width: 9.5em;
}
`;
const h = keyframes`
50% {
  transform: translateY(-0.2em);
}
75% {
  transform: translateY(0.5em);
}

100% {
  transform: translateY(0);
}
`;
const Wrapper = styled.section`
min-height: 100vh;

  
  .h,.not-empty {
    border-bottom: #be9299 solid 2px;
    width: 0;
    display:flex;
    overflow: hidden;
    z-index: 1;
    margin: 0 auto;
    animation: ${mem} 0.5s forwards 0.3s ease-out;
    
    h1 {
      color: #aaaa;
      font-size: 1.5em;
      position: relative;
      font-family: sans-serif;
      letter-spacing: 6px;
      transform: translateY(5em);
      margin: 0 auto;
      text-transform: uppercase;
      animation:${h} 2s forwards 0.5s ease;

      
    }
  }
  .not-empty h1{
    &:nth-of-type(1){
      color:#f39a18;
    }
    &:nth-of-type(2){
      color:#ec898f;
    }
    &:nth-of-type(3){
      color:#9789ec;
    }
    &:nth-of-type(4){
      color:#ec898f;
    }
    &:nth-of-type(5){
      color:#b4ec89;
    }
    &:nth-of-type(6){
      color:#ecd689;
    } 
    &:nth-of-type(7){
      color:thistle;
    }
  }
  .gallery{
    display: flex;
    margin-top: 3vw;
    flex-wrap: wrap;
    place-items: flex-start;
    justify-content: center;
    padding: 2em;
    gap: 1.4em;

    @media screen and (max-width: 830px) {
     
      grid-template-columns: repeat(auto-fit, 350px);
    }

    .empty-meme {
      display: grid;
      place-items: center;
      color:grey;
      font-family:"roboto",sans-serif;
      .link_home {
        color: #be9299;
      }
    }
    .img-container{
      position: relative;
      margin-bottom:1rem;
      .bin {
        padding: 5px;
        position: absolute;
        right: 2%;
        top: 2%;
        opacity: 0;
        color: #e43030;
        font-size: 0.9rem;
        z-index: 1;
        cursor: pointer;
        margin: 0;
        background: white;
        border-radius: 50%;
        border: solid 1px white;
        transition: opacity 0.4s ease-in;
      }
    &:hover .bin {
      opacity: 1;
    }
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
        max-height:300px;
        object-fit:cover;
        width: 350px;
        max-width: 400px;
    }
    
    .bounding-box {
      position: absolute;
      object-fit:contain;
      border-radius: 50%;
    }
  }
`;
