import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Main from "./Main.js"
import React from 'react';
import Patients from './Patients';
import { Nav } from './Navbar';
import Create from './Create';
import CreatePatient from './CreatePatient';
import Appointment from './Appointment';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/create/:id" element={<Create/>} />
        <Route path="/createPatient" element={<CreatePatient/>} />
        <Route path="/appointments" element={<Appointment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
