import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './view/homepage/homepage';
import NotFound from './view/notfound/notfound';
import Register from './view/register/register';
import Login from './view/login/login';
import Header from './component/header';
import Footer from './component/footer';
import Wilderness from './view/wilderness';
import { GlobalStyle } from './utils/style/GlobalStyle';





function Roads() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wilderness" element={<Wilderness />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}



export default Roads;