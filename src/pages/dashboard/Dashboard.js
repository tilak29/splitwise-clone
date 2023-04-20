import React,{useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase';
import logo from '../../assets/images/logo.svg';


export default function Dashboard(){

    const photourl = auth?.currentUser?.photoURL;
    const name = auth?.currentUser?.displayName;
    const uid = auth?.currentUser?.uid;

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])


    return(
        <>
        <div className="py-1 bg-[#5bc5a7] flex justify-around items-center">
            <div>
            <img className="w-24" src={logo}/>
            </div>
            <div className="flex gap-2">
            <img className="rounded-[50%] w-7" src={photourl} /> 
            <p className="text-white">{name || uid.slice(0,6)}</p>
            </div>

        </div>
        
        <div className="text-center flex items-center justify-center h-52">
            <p className="my-auto text-2xl font-bold">
            You are in Signed in Succsessfully.
            </p>
        </div>



        </>
    )

}