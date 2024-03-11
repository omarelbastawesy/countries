import { GlobalStyle } from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Countery from "./components/Countery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/countries" element={<Home />} />
          <Route path="countries/:countery" element={<Countery />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
