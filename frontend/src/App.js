import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Register from "./Pages/RegisterPage"
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default App;
