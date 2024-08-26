import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './view/homepage/homepage';
import NotFound from './view/notfound/notfound';
import Register from './view/register/register';
import Login from './view/login/login';
import Header from './component/header';
import Footer from './component/footer';
import Wilderness from './view/wilderness';
import { GlobalStyle, MainContent } from './utils/style/GlobalStyle';
import styled from 'styled-components';


const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function Roads() {
  return (
    <Router>
      <AppWrapper>
      <GlobalStyle />
      <Header />
      <MainContent>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wilderness" element={<Wilderness />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </MainContent>
      <Footer />
      </AppWrapper>
    </Router>
  );
}

// function HeaderWithConditionalRendering() {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const isLogin = location.pathname === '/login';
//   const isRegister = location.pathname === '/register';
//   return !isLogin && !isRegister && !isHomePage && <Header />;
// }

export default Roads;