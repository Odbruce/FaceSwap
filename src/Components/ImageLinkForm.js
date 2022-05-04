import { useEffect } from "react";
import { useGlobalContext } from "./ContextProvider/ContextProvider";
import  styled  from "styled-components";

const ImageLinkForm = () => {
  const { img, inputChange, FaceChange } = useGlobalContext();
  
  useEffect(() => {
    document.getElementById("myAnchor").focus();
  }, []);

  return (
    <Wrapper >
      <form action="" id="form_toggle" className="form">
        <div className="input_container">
          <div className="input1">
            <input
              type="text"
              id="myAnchor"
              value={img}
              onChange={inputChange}
            />
          </div>
          <div className="btn">
            <button onClick={FaceChange}>PLACE</button>
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
      width:fit-content;
      margin:0 auto;
      
      
      .input1 {
        border: 2px black solid;
        border-right:none;
        height: 100%;

        input {
          height: 100%;
          width: 100%;
          border: none;
          font-size: 1rem;
          background-color: transparent;
          padding: 2px;
          margin: 0;
          color: rgb(245, 153, 245);

          &:focus {
            outline: none;
            color: thistle;
          }
        }
      }
      .btn {
        height: 100%;
        width: 5em;
        border: rgb(19, 18, 18, 0.7) solid 2px;
        border-radius: 0 5px 5px 0;
        background: rgb(19, 18, 18, 0.7);

        button {
          border: none;
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
`