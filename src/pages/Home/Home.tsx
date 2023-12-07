import React from 'react';
import './Home.css'; 

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Home text</h1>
      <p>Home text</p>
      <div className="choose-panel">
        <div className="image-container">
          <div className="image-with-text">
            <img
              src="./img/refrigerator.jpg"
              alt="Repairing refrigerators"
              className="image-left"
            />
            <span className="image-text">Ремонт х</span>
          </div>
          <div className="image-with-text">
            <img
              src="./img/wash.jpg"
              alt="Repairing washing machines"
              className="image-right"
            />
            <span className="image-text">Ремонт с</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
