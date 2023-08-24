import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Error } from "./components/error";



export default function App(){
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}
