import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
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
    <div className="about-page-container">
      <h1>Ремонт Холодильников Челябинск</h1>
      <p>🛠 Я – частный мастер Суворкин Артем Андреевич с опытом более 10 лет!</p>
      <p>🔧 Осуществляю КАЧЕСТВЕННЫЙ РЕМОНТ холодильной техники и стиральных машин на дому с ГАРАНТИЕЙ и по НИЗКОЙ ЦЕНЕ.</p>
      <p>🔩 В моей работе использую оригинальные запчасти.</p>
      <p>👍 Работаю на РЕПУТАЦИЮ, цены на услуги ниже на 10%-50% по сравнению с фирмами.</p>
      <p>🕒 Осуществляю выезд к вам в ближайшее или удобное для вас время.</p>
      <p>💰 Стоимость ремонта обговаривается с клиентом до начала работы.</p>
      <p>⏰ Мой график работы без выходных с 7:00 до 24:00, звоните - буду рад ВАМ помочь.</p>
      <div className="vk-discount">
        <p>🌟 Подписчикам группы ВКОНТАКТЕ полагается скидка. </p>
        <Link to="https://vk.com/remholodchel" target="_blank" rel="noopener noreferrer">
          <img src="./img/vk.png" alt="VK Logo" />
        </Link>
      </div>
      <div className="photos-container">
        <div className="main-photo-container">
          <button className="custom-button prev" onClick={handlePreviousPhoto}>
            &#8249;
          </button>
          <img
            src={photos[currentPhotoIndex]}
            alt={`Main Ph`}
            className="main-photo"
          />
          <button className="custom-button next" onClick={handleNextPhoto}>
            &#8250;
          </button>
        </div>
        <div className="additional-photos">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Additional Ph ${index + 1}`}
              className={`additional-photo ${currentPhotoIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentPhotoIndex(index)}
            />
          ))}
        </div>
        <p>ИНН: 744810028285</p>
      </div>
    </div>
  );
};

export default About;
