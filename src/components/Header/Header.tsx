import React, { useState, useEffect }  from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const phoneImage = document.getElementById('phoneImage') as HTMLImageElement | null;
    if (phoneImage) {
        phoneImage.addEventListener('click', () => {
            window.location.href = 'tel:+1234567890';
        });
    }
    return (
        <header className={isHeaderFixed ? 'fixed-header' : ''}>
            <Link className="site-logo" to="/" target="_blank" rel="noopener noreferrer">
                <img src="./img/logo.png" alt="Logo" />
            </Link>
            <div className="telephone-container">
                <a href="tel:+1234567890">+1 234-567-890</a>
                <img src="./img/tel.png" alt="Telephone" id="phoneImage"/>
            </div>
            <nav>
                
                <NavLink 
                    to="/" 
                    className={({ isActive, isPending }) =>
                        isPending ? "main" : isActive ? "main-active" : ""
                }>
                    ГЛАВНАЯ СТРАНИЦА
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive, isPending }) =>
                        isPending ? "about" : isActive ? "about-active" : ""
                }>
                    ОБО МНЕ
                </NavLink>
                <NavLink 
                    to="/contacts" 
                    className={({ isActive, isPending }) =>
                        isPending ? "contacts" : isActive ? "contacts-active" : ""
                }>
                    КОНТАКТЫ
                </NavLink>
                <NavLink 
                    to="/recenze" 
                    className={({ isActive, isPending }) =>
                        isPending ? "contacts" : isActive ? "contacts-active" : ""
                }>
                    ОТЗЫВЫ
                </NavLink>
            </nav>
            <Link className="vk-logo" to="https://vk.com/adultswimming" target="_blank" rel="noopener noreferrer">
                <img src="./img/vk.png" alt="Logo" />
            </Link>
        </header>
    );  
};

export default Header;
