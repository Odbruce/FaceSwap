import Navigation from "./Components/Navigation";
import { Home,Memes,Register,SignIn,Instructions } from "./pages";
import PrivateRoute from "./Components/PrivateRoute";
import { Routes, Route, Navigate} from "react-router-dom";
import { useFireContext } from "./Components/FirebaseContext";
import { ContextProvider } from "./Components/ContextProvider/ContextProvider";


const App = ()=>{
  const {isLoggedIn,user,addMeme} = useFireContext();
 
  return (
    <>
      <div className="app">
       
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
