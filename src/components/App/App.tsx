import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contacts from '../../pages/Contacts/Contacts';
import Recenze from '../../pages/Recenze/Recenze';
import RepairingWash from '../../pages/Repairing/ремонт-стиральных-машин';
import RepairingRef from '../../pages/Repairing/ремонт-холодильников';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="обо-мне" element={<About />} />
          <Route path="контакты" element={<Contacts />} />
          <Route path="отзывы" element={<Recenze />} />
          <Route path="ремонт-стиральных-машин" element={<RepairingWash />} />
          <Route path="ремонт-холодильников" element={<RepairingRef />} />
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
