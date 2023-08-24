import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Login(){

    const login=()=>{
        toast.success("id has been success....")
    }
    return(
        <>
        <ToastContainer position="bottom-right"/>
        
            <input type="email" placeholder="Enter your name..."/>
            <button onClick={login}>login</button>
        
        </>
    )
}

export{Login}