import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from '../Layout/Layout';
import LayoutMobile from '../Layout/LayoutMobile';
import Home from '../../pages/Home/Home';
import HomeMobile from '../../pages/Home/HomeMobile';
import About from '../../pages/About/About';
import Recenze from '../../pages/Recenze/Recenze';
import RepairingWash from '../../pages/Repairing/ремонт-стиральных-машин';
import RepairingRef from '../../pages/Repairing/ремонт-холодильников';
import { useMediaQuery } from 'react-responsive';

function MobileApp(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMobile />}>
            <Route index element={<HomeMobile />} />
            <Route path="ремонт-стиральных-машин" element={<RepairingWash />} />
            <Route path="ремонт-холодильников" element={<RepairingRef />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function DesktopApp(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="обо-мне" element={<About />} />
          <Route path="отзывы" element={<Recenze />} />
          <Route path="ремонт-стиральных-машин" element={<RepairingWash />} />
          <Route path="ремонт-холодильников" element={<RepairingRef />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: '(max-width: 1300px)' });

  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App;
