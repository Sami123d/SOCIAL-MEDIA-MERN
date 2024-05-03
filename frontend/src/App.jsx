import React from "react";
import Home from "./Pages/homess/Home";
import "./app.css";
import Profile from "./Pages/profile/Profile";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Update import statemen

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/profile/:username" element={<Profile/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
