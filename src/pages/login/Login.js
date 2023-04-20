import React, {useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'


import logo from '../../assets/images/logo.svg';
import google from '../../assets/images/google.png';

export default  function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signIn = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
      }
    };

    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/dashboard")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }
  
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
        navigate("/dashboard")
      } catch (err) {
        console.error(err);
      }
    };
  
    const logout = async () => {
      try {
        await signOut(auth);
      } catch (err) {
        console.error(err);
      }
    };
  

    return(
        <>
        <div className="mt-16 max-[450px]:mt-4">
        <div className="flex flex-col justify-center items-center gap-4">
            <img className="maxw-28" src={logo} />
            <p className="font-Montserrat text-2xl mt-4">Log in</p>
      <input className="mt-1 block w-[24rem] max-[450px]:w-[18rem] px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        placeholder="Email..."
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="mt-1 block w-[24rem] max-[450px]:w-[18rem] px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        placeholder="Password..."
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="rounded border bg-[#ff652f] text-white text-xl font-Lato w-[24rem] max-[450px]:w-[18rem] h-12" 
      onClick={onLogin}>
         Log in</button>
      <p className="text-xs text-gray-500">or</p>
      <button className="flex gap-3 justify-center items-center
      mt-1 w-[18rem] max-[450px]:w-[16rem] px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      border-b-[3px] border-b-[#9a9d9e] hover:bg-[#f7f3ee]"
       onClick={signInWithGoogle}>
        <img src={google} /> Log in With Google</button>
      <button onClick={logout} className="mt-1 w-[18rem] max-[450px]:w-[16rem] px-3 py-3 bg-indigo-100 border border-slate-300 rounded-md text-sm shadow-s hover:bg-[#dd893a]"> Log Out </button>

        </div>
        </div>
        </>
    )
}