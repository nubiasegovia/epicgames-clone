import React from "react";
import Header from "./components/shared/Header/Header";
import styled from "styled-components";
import Footer from "./components/shared/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Background>
        <Header />
        <Footer />
      </Background>
    </div>
  );
}

const Background = styled.div`
  background-color: rgb(18, 18, 18);
  position: relative;
  height: 100vh;
  widht: 100wh;
`;

export default App;
