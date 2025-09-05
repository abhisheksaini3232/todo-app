// import logo from "./logo.svg";
import "./App.css";
import { getPosts } from './api';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, [])
  return (
    <>

       {data ? data.map((e) => <li>{e.title}</li>) : <p>No Data</p>}
  
    </>
  )
}
export default App;