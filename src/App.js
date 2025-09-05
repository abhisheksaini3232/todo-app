import logo from "./logo.svg";
import "./App.css";
import { getPosts } from './api';
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    getPosts().then{(posts) => console.log(posts);}
  }, [])
  return (
    <>

  
    </>
  )
}
export default App;