import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Wilderness from './view/wilderness';
import MyGarden from './view/mygarden';
import Profile from './view/profile';

import Homepage from './view/homepage';
import Register from './view/register';
import Login from './view/login';
import NotFound from './view/notfound';
import Informations from './view/informations';

import { GlobalStyle } from './utils/style/GlobalStyle';





function Roads() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/wilderness" element={<Wilderness />} />
        <Route path="/mygarden" element={<MyGarden />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}



export default Roads;