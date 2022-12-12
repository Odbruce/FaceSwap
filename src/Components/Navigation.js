import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineLogout as Out } from "react-icons/ai";
import { useFireContext } from "./Context/FirebaseContext";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./Context/ContextProvider";

const Navigation = () => {
  const {
    isLoggedIn,
    setisLoggedIn,
    loading,
    logOut,
    setSideMenu,
    sideMenu,
    ref,
  } = useFireContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // const whenClickedOutside = (e) => {
  //   //   if (sideMenu && ref.current && !ref.current.contains(e.target)) {
  //   //     setSideMenu(false);
  //   //   }
  //   // };

  //   document.addEventListener("click", whenClickedOutside);

  //   return () => {
  //     document.removeEventListener("click", whenClickedOutside);
  //   };
  // }, [sideMenu]);

  const Active = ({ isActive }) => {
    if (isActive) {
      return "active li";
    } else {
      return "li";
    }
  };
  const handlemenu = () => {
    setSideMenu((prev) => !prev);
  };
  return (
    <Wrapper>
      <Logo />
      <div className="menu">
        <div
          className={!sideMenu ? "menu-icons" : "menu-icons close-menu"}
          onClick={handlemenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav ref={ref} className="menu-list">
          <ul className={sideMenu ? "ul" : "ul flip"}>
            <NavLink
              to="/home"
              onClick={handlemenu}
              className={(isActive) => Active(isActive)}
            >
              Home
            </NavLink>

            <NavLink
              to="/howitworks"
              onClick={handlemenu}
              className={(isActive) => Active(isActive)}
            >
              About
            </NavLink>

            <NavLink
              to="/memes"
              onClick={handlemenu}
              className={(isActive) => Active(isActive)}
            >
              Memes
            </NavLink>

            {!loading &&
              (isLoggedIn ? (
                <div
                  className="li signout "
                  onClick={() => {
                    setisLoggedIn(false);
                    handlemenu();
                    logOut();
                    navigate("/signin");
                  }}
                >
                  <Out className="out" />
                  <li>Log-out</li>
                </div>
              ) : (
                <NavLink
                  to="/signin"
                  onClick={handlemenu}
                  className={(isActive) => Active(isActive)}
                >
                  Sign-in
                </NavLink>
              ))}
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Navigation;

const head = keyframes` {
  50% {
    padding-bottom: 0.5em;
    border-bottom: solid 2px rgb(70, 156, 142);
  }
  75% {
    padding-bottom: 0.1em;

    border-bottom: solid 2px rgb(70, 156, 142);
  }
  100% {
    padding-bottom: 0.3em;

    border-bottom: solid 2px rgb(70, 156, 142);
  }
}`;

const Wrapper = styled.section`
  display: flex;

  .menu {
    width: 100%;

    .menu-icons {
      display: none;
    }

    .menu-list {
      position: relative;
      z-index:5;

      .ul {
        display: flex;
        justify-content: space-evenly;
        padding: 2em;
        letter-spacing: 0.15rem;
        font-family: "Happy Monkey", cursive;
        font-weight: 600;
        font-size: 1.1rem;
        list-style: none;
        color: #be9299;

        .li {
          color: #be9299;
        }
        .signout {
          display: flex;
          cursor: pointer;
          gap: 10px;
          
          .out {
            color: #f85353;
            font-size: 1.1rem;
            transform:translatey(25%);
          }

          li {
            color: #e06f6f;
          }
        }

        .active {
          color: transparent;
          background-image: linear-gradient(355deg, #f3ec78, rgb(70, 156, 142));
          -webkit-fill-color: transparent;
          -webkit-background-clip: text;
          animation: ${head} 0.7s ease-in forwards;
          transition: 1s 0.1s color;
        }
      }
    }
  }
  @media screen and (max-width: 630px) {
    padding: 0.6em;
    height: 54px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .menu {
      display: flex;
      height;fit-content;
      width:fit-content;

      .menu-icons {
        display: flex;
        height: 1.3rem;
        width: 1.25rem;
        justify-content: space-around;
        flex-direction: column;
        // transition: all ease-in-out .6s ;

        div {
          height: 0.104rem;
          width: 100%;
          transition: all ease-in-out .6s ;
          background: #79b0b0;
        }
      }

      .close-menu :nth-child(1) {
        transform: rotate(-45deg) translatex(-50%);
        background-color: #e06f6f;
      }
      .close-menu :nth-child(2) {
        transform: translateX(6.25rem);
        opacity: 0;
      }
      .close-menu :nth-child(3) {
        transform: rotate(45deg) translateX(-50%);
        background-color: #e06f6f;
      }

      .menu-list {
        position: absolute;
        top: 50px;
        right: 9.6px ;
        overflow: hidden;

        .flip {
          transform: translateX(200px);
          opacity: 0;
        }
        .ul {
          width: 35vw;
          margin: 0;
          white-space: nowrap;
          opacity: 1;
          display: block;
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 1s ease-out;
          padding: 0;

          .li {
            background: #52414e;
            color: grey;
            border-radius: 5px;
            margin-top: 1em;
            padding: 0.8em 2em 0.8em 0.5em;

            .out {
              font-size: 1.1rem;
            }
          }
          .active {
            animation: none;
            color: rgb(70, 156, 142);
            color: #b4ec89;
          }
        }
      }
    }
  }
`;
