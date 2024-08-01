import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './view/homepage/homepage';
import NotFound from './view/notfound/notfound';
import Register from './view/register/register';
import Login from './view/login/login';


function Roads() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Roads;