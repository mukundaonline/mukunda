import React from "react";
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "@firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="Loginpage">
      <button onClick={signInWithGoogle}>Login with Google</button>
    </div>
  );
}

export default Login;
