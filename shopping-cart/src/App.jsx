import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import './App.css'
import React from 'react'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
     <React.Fragment>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
