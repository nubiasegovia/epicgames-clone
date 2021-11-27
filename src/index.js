import React from 'react';
import ReactDOM from 'react-dom';
import FontSyles from './assets/fonts/fonts';
import Home from './pages/Home/Home';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import styled from 'styled-components';
import Game from './pages/Game/Game';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const IndexWrapper = styled.div`
  background-color: rgb(18, 18, 18);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <FontSyles />
    <Header />
    <IndexWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' elent={<Register />} />
        </Routes>
      </BrowserRouter>
     </IndexWrapper>
     <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

