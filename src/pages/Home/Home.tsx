import React from 'react';
import './Home.css'; 
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Home text</h1>
      <p>Home text</p>
      <h1>Home text</h1>
      <p>Home text</p>

       <h1>Home text</h1>
      <p>Home text</p> <h1>Home text</h1>
      <p>Home text</p>
      <h1>Home text</h1>
      <p>Home text</p>
        <div className="image-container">
          <div className="image-with-text">
            <NavLink to="/rem-ref">
              <img
                src="./img/refrigerator.jpg"
                alt="Repairing refrigerators"
                className="image-left"
              />
              <span className="image-text">Ремонт х</span>
            </NavLink>
          </div>
          <div className="image-with-text">
            <NavLink to="/rem-wash">
              <img
                src="./img/wash.jpg"
                alt="Repairing washing machines"
                className="image-right"
              />
              <span className="image-text">Ремонт с</span>
            </NavLink>
          </div>
        </div>
    </div>
  );
};

export default Home;
