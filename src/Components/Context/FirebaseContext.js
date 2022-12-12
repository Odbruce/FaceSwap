import React,{useContext,useEffect,useRef,useState,} from "react"
import { auth,db } from "../../firebase";
import {createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { addDoc,collection,deleteDoc,doc, onSnapshot, serverTimestamp, query, orderBy, } from "firebase/firestore";

const Context = React.createContext()
const FirebaseContext = ({children}) => {
    const [loading , setLoading ] = useState(true);
    const [user,setUser] = useState(null);
    const [isLoggedIn,setisLoggedIn]  = useState(false);
    const [meme, setMeme] = useState([]);
    const [sideMenu, setSideMenu] = useState(false);

  const ref = useRef(null); 

    useEffect( ()=>{
        const unsubscribe= onAuthStateChanged(auth,user=>{

          setLoading(true);

         if(user){
            setisLoggedIn(true);
            setUser(user.email);
            setLoading(false);
          }else{setLoading(false);}
         });
         return unsubscribe;
       },[])

       const signUp = (email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
       }
       const login = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
       
       }
       const logOut = ()=>{
         setUser(null);
         return signOut(auth);
       }
    
      
      const getMemes = ()=>{
        setLoading(true);
        const colRef = collection(db,`${user}`);

         const q = query(colRef,orderBy("createdAt")); 

         onSnapshot(q,(snapshot) => {           
          setMeme( snapshot.docs.map((doc)=>{
            const {Face, style} = doc.data();
            const emoji = JSON.parse(style);
            console.log(Face,emoji)
            return {Face,style:emoji,id:doc.id}
            }));

           setLoading(false);

          })

       }

       const addMeme = (up,Face)=>{
        const colRef = collection(db,`${user}`);
           const emojiStyle = up.map((item) => item.props.style);
            const style = JSON.stringify(emojiStyle)
       return  addDoc(colRef,{Face,style,createdAt:serverTimestamp()},)
       }

       
       const del =  (id) => {
            const filtered= meme.filter((item)=>{
            return item.id != id;
          })
           setMeme(filtered);
        const idRef = doc(db, user, id);
        deleteDoc(idRef);
      };


  return (<Context.Provider value = {{
     signUp,
     sideMenu,
     setSideMenu,
     ref,
     user,
     login,
     logOut,
     del,
     setisLoggedIn,
     getMemes,
     meme,
     addMeme,
     isLoggedIn,
     loading,
  }}>  
  {children}
  </Context.Provider>
  )
}
export const useFireContext = () => {
    return useContext(Context);
  };
export {FirebaseContext,Context}