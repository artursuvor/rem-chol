import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import About from '../../pages/About';
import Contacts from '../../pages/Contacts';
import Recenze from '../../pages/Recenze';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="recenze" element={<Recenze />} />
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
