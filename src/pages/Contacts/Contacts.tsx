// Contacts.tsx

import React, { useEffect } from 'react';
import './Contacts.css';

// Добавляем declare global здесь, перед использованием объекта google
declare global {
  interface Window {
    google: {
      maps: {
        Map: any; // Замени 'any' на более конкретный тип, если он доступен
        Marker: any; // Замени 'any' на более конкретный тип, если он доступен
        // Добавь другие необходимые объекты и типы
      };
    };
  }
}

const Contacts: React.FC = () => {
  // useEffect(() => {
  //   // Загрузка Google Maps API скрипта
  //   const googleMapScript = document.createElement('script');
  //   googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
  //   googleMapScript.async = true;
  //   window.document.body.appendChild(googleMapScript);

  //   googleMapScript.addEventListener('load', () => {
  //     // Инициализация карты
  //     const mapContainer = document.getElementById('map');
  //     if (mapContainer) {
  //       const map = new window.google.maps.Map(mapContainer, {
  //         center: { lat: 40.712776, lng: -74.005974 }, // Координаты центра карты (Нью-Йорк, например)
  //         zoom: 12, // Масштаб карты
  //       });

  //       // Создание маркера
  //       const marker = new window.google.maps.Marker({
  //         position: { lat: 40.712776, lng: -74.005974 }, // Координаты маркера (Нью-Йорк, например)
  //         map: map,
  //         title: 'Место на карте', // Название маркера
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div className="contacts-page-container">
      <h1>Contacts</h1>
      <div id="map" className="map-container"></div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: artemsuvor@gmail.com</p>
        <br />
        <p>Телефон: <a href="tel:+79823435703">8 (982) 343-57-03</a></p>
      </div>
    </div>
  );
};

export default Contacts;
