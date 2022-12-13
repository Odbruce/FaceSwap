import styled,{keyframes } from "styled-components"


export const Form = styled.form`

fieldset {
    padding: 1em;
    border: none;

    .legend{
        font-size: 2em;
        margin: 0 auto;
        font-family:segoe UI;
        background-image: linear-gradient(45deg, #f3ec78, #af4261, thistle);
        -webkit-background-clip: text;
        background-clip:text;
        color: transparent;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        color: grey;
        margin-bottom: 1em;

        label {
            padding: 0.4em;
            text-align:start;
            text-shadow: 0 4px 22px 0 rgba(0, 0, 0, 0.3);
        }
        .form-input {
            background: transparent;
            border: 1.9px solid rgb(0, 0, 0, 0.5);
            font-size: 0.9rem;
            padding: 0.4em;
            outline: none;
            color: grey;

            &:focus {
                border: 2px solid rgb(0, 0, 0, 0.5);
            }
        }
    }
}
.submit{
    display: flex;
    flex-direction: column;

    input {
        padding: 0.7em;
        background: transparent;
        border: grey 1.4px solid;
        cursor: pointer;
        letter-spacing: 1px;
        outline:none;
        color: thistle;
    }

    .register-link {
        border: none;
        color: black;
        width: fit-content;
        place-self: center;
    }
}
`
const err = keyframes`
    50% {
        top: -16%;
    }
    75% {
        opacity: 1;
        top: -13%;
    }
    100% {
        opacity: 1;
        top: -14%;
        z-index: 1;
    }
`
export const Error = styled.div`
left: 0;
right: 0;
top: -10%;
position: absolute;
background: #c74343;
color: white;
z-index: -5;
padding:0.5em;
font-family:segoe UI;
opacity: 0;
transition: all 1s ease;
animation: forwards ${err} 1s ease;
`