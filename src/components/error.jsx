import React from "react";
import { Link } from "react-router-dom";

function Error(props){
    return(
        <>
        <h1 style={props.css}>{props.text}</h1>
        <h2>you have click or enter wrong path <Link to="/home">go back</Link></h2>
        </>
    )
}

export{Error}