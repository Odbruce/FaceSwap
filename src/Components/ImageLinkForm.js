import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./Context/ContextProvider";
import styled from "styled-components";

const ImageLinkForm = () => {
  const { img, inputChange, FaceChange, dispatch, url } = useGlobalContext();
  const [flip, setFlip] = useState(false);
  const fileref = useRef(null);
  const file = () => {
    let Base64;
    const doc = fileref.current.files[0];
    console.log(doc);
    // dispatch({ type: "URL", payload: URL.createObjectURL(doc) });
    let image = URL.createObjectURL(doc);
    const reader = new FileReader();
    reader.readAsDataURL(doc);
    reader.onload = function () {
      Base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
      FaceChange(image, Base64);
    };
  };

  useEffect(() => {
    document.getElementById("front").focus();
  }, []);

  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        id="form_toggle"
        className="form"
      >
        <div
          onDoubleClick={() => {
            setFlip((prev) => {
              return !prev;
            });
          }}
          className="input_container"
        >
          <div className={!flip ? "input1" : "flip"}>
            <input type="text" id="front" value={img} onChange={inputChange} />
            <div className="back-wrap">
              <input
                onChange={file}
                // id="back"
                type="file"
                ref={fileref}
                name=""
                id="file"
              />
              <label htmlFor="file">Import an image</label>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                FaceChange(img);
              }}
            >
              DISPLAY
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default ImageLinkForm;

const Wrapper = styled.section`
  .form {
    margin-bottom: 2%;

    .input_container {
      display: grid;
      grid-template-columns: 50vw 1fr;
      width: fit-content;
      margin: 0 auto;
      perspective: 1000;
      z-index: 1;
      // background: orange;

      .flip,
      .input1 {
        position: relative;
        border: 2px black solid;
        border-right: none;
        height: 2rem;
        transition: all 1s;
        -moz-backface-visibility: hidden;
        transform-origin: center;
        transform-style: preserve-3d;

        input {
          position: absolute;
          width: 100%;
          height: 100%;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          border: none;
          font-size: 1rem;
          background-color: transparent;
          padding: 2px;
          margin: 0;
          color: rgb(245, 153, 245);
        }
        #front {
          &:focus {
            outline: none;
            color: thistle;
          }
        }
        .back-wrap {
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: rotateX(180deg) translateX(-0.2rem);
          width: 12rem;
          height: 2.1rem;

          #file {
            position: absolute;
            opacity: 0;
            height: 1.5rem;
          }
          label {
            position: absolute;
            font-family: "poppins", san-serif;
            width: 100%;
            height: 100%;
            padding: 0.09rem 0.5rem 0.09rem 0.5rem;
            background: #ecd689;
            background: rgb(19, 18, 18, 0.7);
            color: #131212;
            color: #f5f5dc;
            line-height: 2.1rem;
            font-size: 1.3rem;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
      .flip {
        transform: rotateX(180deg);
        border-color: #b4ec89;
        border-color: rgb(19, 18, 18, 0.7);
        border-bottom-color: transparent;
        border-left-color: transparent;
      }

      .btn {
        height: 2rem;
        width: 5em;
        border: rgb(19, 18, 18, 0.7) solid 2px;
        border-radius: 0 5px 5px 0;
        background: rgb(19, 18, 18, 0.7);

        button {
          border: none;
          letter-spacing: 1.3px;
          background: transparent;
          cursor: pointer;
          color: rgb(230, 220, 230);
          height: 100%;
          width: 100%;
        }

        &:hover {
          background: rgba(24, 17, 17, 0.5);
        }
      }
    }
  }
`;
