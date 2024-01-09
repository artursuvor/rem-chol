import React from 'react';
import { NavLink } from "react-router-dom";
import './Home.css'; 

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="image-with-text">
          <NavLink to="/ремонт-холодильников">
            <img
              src="./img/fridge.jpg"
              alt="Repairing refrigerators"
              className="image-left"
            />
            <span className="image-text">Ремонт Холодильников</span>
          </NavLink>
        </div>
        <div className="image-with-text">
          <NavLink to="/ремонт-стиральных-машин">
            <img
              src="./img/wash.jpg"
              alt="Repairing washing machines"
              className="image-right"
            />
            <span className="image-text">Ремонт Стиральных Машин</span>
          </NavLink>
         </div>
      </div>
    </div>
  );
};

export default Home;
