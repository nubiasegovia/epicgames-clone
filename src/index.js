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

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const Background = styled.div`
  background-color: rgb(18, 18, 18);
  position: relative;
`;

ReactDOM.render(
  <React.StrictMode>
    <FontSyles />
    <Header />
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
     </Background>
     <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

