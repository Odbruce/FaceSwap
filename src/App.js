import Navigation from "./Components/Navigation";
import { Home,Memes,Register,SignIn,Howitworks } from "./pages";
import { Routes, Route, Navigate} from "react-router-dom";
import { useFireContext } from "./Components/Context/FirebaseContext";
import { ContextProvider, useGlobalContext } from "./Components/Context/ContextProvider";
import { PrivateRoute } from "./Utilities";


const App = ()=>{
  const {isLoggedIn,user,addMeme,setSideMenu,sideMenu,ref} = useFireContext();
 
  const whenClickedOutside = (e) => {
    if (sideMenu && ref.current && !ref.current.contains(e.target)) {
      setSideMenu(false);
    }
  };
 
  return (
    <>
      <div onClick={whenClickedOutside} className="app">
       
      <ContextProvider addMeme={addMeme} user={user} >
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/howitworks" element={<Howitworks />} />
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
