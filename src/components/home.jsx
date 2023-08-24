import React from "react";
import { Header } from "./header";
import { Error } from "./error";
import { List } from "./List";


function Home(){
    return(
        <>
        <Header/>
        <List/>
        <Error text="this is errror page" css={{color:"red"}}/>
        <Error text="this is errror page" css={{color:"blue"}}/>
        <Error text="this is errror page" css={{color:"yellow"}}/>
    
        </>
    )
}
export{Home}

// git remote add origin https://github.com/nirmalkumar52106/batch11-30.git
// git branch -M main
// git push -u origin main