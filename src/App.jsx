//import { useState } from 'react'
//import { Route,Routes } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </main>
  );
}

export default App;
