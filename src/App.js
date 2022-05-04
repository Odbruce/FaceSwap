import Navigation from "./Components/Navigation";
import { Home,Memes,Register,SignIn,Instructions } from "./pages";
import PrivateRoute from "./Components/PrivateRoute";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import Particles from "react-tsparticles";
import { useFireContext } from "./Components/FirebaseContext";
import { ContextProvider } from "./Components/ContextProvider/ContextProvider";


const App = ()=>{
  const {isLoggedIn,user,addMeme} = useFireContext();
 
  return (
    <>
      <div className="app">
        {/* <Particles
      id="tsparticles"    
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color:"#332333",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />  */}
    <ContextProvider addMeme={addMeme} user={user} >
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/howitworks" element={<Instructions />} />
          <Route path="/memes" element={<PrivateRoute isLoggedIn = {isLoggedIn} redirecto = "/signin" ><Memes /></PrivateRoute>} />
          <Route element={<PrivateRoute isLoggedIn={!isLoggedIn} redirecto={"/home"}/>} >
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Route>         
        </Routes>
    </ContextProvider>

      </div>
    </>
  );
}

export default App;
