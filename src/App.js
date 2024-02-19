import React, {useState, useEffect} from "react";
import MyForm from './MyForm';
import './App.css'
import Navbar from "./Navbar";

function App(){
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <>
      <Navbar brand="Patata"/>
      <MyForm/>
    </>
  )
}

export default App