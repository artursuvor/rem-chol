import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import './HomeMobile.css'; 

const Home: React.FC = () => {
    const photos = [
        "./photos/работа1.jpg",
        "./photos/работа2.jpg",
        "./photos/работа3.jpg",
        "./photos/работа4.jpg",
        "./photos/работа5.jpg",
      ];
    
      const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
    
      const handlePreviousPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
      };
    
      const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
      };
    
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
            <span className="image-text-mobile">Ремонт Холодильников</span>
          </NavLink>
        </div>
        <div className="image-with-text">
          <NavLink to="/ремонт-стиральных-машин">
            <img
              src="./img/wash.jpg"
              alt="Repairing washing machines"
              className="image-right"
            />
            <span className="image-text-mobile">Ремонт Стиральных Машин</span>
          </NavLink>
         </div>
      </div>
      <div className="about-page-container">
        <h1>Ремонт Холодильников Челябинск</h1>
            <p>🛠 Я – частный мастер с опытом более 10 лет!</p>
            <p>🔧 Осуществляю КАЧЕСТВЕННЫЙ РЕМОНТ холодильной техники и стиральных машин на дому с ГАРАНТИЕЙ и по НИЗКОЙ ЦЕНЕ.</p>
            <p>🔩 В моей работе использую оригинальные запчасти.</p>
            <p>👍 Работаю на РЕПУТАЦИЮ, цены на услуги ниже на 10%-50% по сравнению с фирмами.</p>
            <p>🕒 Осуществляю выезд к вам в ближайшее или удобное для вас время.</p>
            <p>💰 Стоимость ремонта обговаривается с клиентом до начала работы.</p>
            <p>⏰ Мой график работы без выходных с 7:00 до 24:00, звоните - буду рад ВАМ помочь.</p>
            <div className="vk-discount">
                <p>🌟 Подписчикам группы ВКОНТАКТЕ полагается скидка. </p>
                <Link to="https://vk.com/remholodchel" target="_blank" rel="noopener noreferrer">
                    <img src="./img/vk.png" alt="Logo" />
                </Link>
            </div>
            <div className="photos-container">
                <div className="main-photo-container">
                <button className="custom-button-mobile prev-mobile" onClick={handlePreviousPhoto}>
                    &#8249;
                </button>
                <img
                    src={photos[currentPhotoIndex]}
                    alt={`photo${currentPhotoIndex}`}
                    className="main-photo"
                />
                <button className="custom-button-mobile next-mobile" onClick={handleNextPhoto}>
                    &#8250;
                </button>
                </div>
                <div className="additional-photos">
                {photos.map((photo, index) => (
                    <img
                    key={index}
                    src={photo}
                    alt={`photo${index}`}
                    className={`additional-photo ${currentPhotoIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    />
                ))}
                </div>
            </div>
        </div>
        <div className='recenze-container'>
            <p>
                Все отзывы вы можете посмотреть в моей группе 
            </p>
            <a href="https://vk.com/remholodchel" target="_blank">ВКОНТАКТЕ</a>
        </div>
    </div>
  );
};

export default Home;
