import React, { useState, useEffect }  from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          const header = document.querySelector('header');
          if (header) {
            if (offset > 115 && !isHeaderFixed) {
              setIsHeaderFixed(true);
              header.classList.remove('hidden');
            } else if (offset <= 115 && isHeaderFixed) {
              setIsHeaderFixed(false);
              header.classList.add('hidden');
            }
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isHeaderFixed]);      
    
    const phoneImage = document.getElementById('phoneImage') as HTMLImageElement | null;
    if (phoneImage) {
        phoneImage.addEventListener('click', () => {
            window.location.href = 'tel:+79823435703';
        });
    }
    return (
        <header className={isHeaderFixed ? 'fixed-header' : ''}>
            <Link className="site-logo" to="/" target="_blank" rel="noopener noreferrer">
                <img src="./img/logo.png" alt="Logo" />
            </Link>
            <div className="telephone-container">
                <a href="tel:+79823435703">8 (982) 343-57-03</a>
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
                    to="/обо-мне" 
                    className={({ isActive, isPending }) =>
                        isPending ? "about" : isActive ? "about-active" : ""
                    }>
                    ОБО МНЕ
                </NavLink>
                <NavLink 
                    to="/контакты" 
                    className={({ isActive, isPending }) =>
                        isPending ? "contacts" : isActive ? "contacts-active" : ""
                    }>
                    КОНТАКТЫ
                </NavLink>
                <NavLink 
                    to="/отзывы" 
                    className={({ isActive, isPending }) =>
                        isPending ? "contacts" : isActive ? "contacts-active" : ""
                    }>
                    ОТЗЫВЫ
                </NavLink>
            </nav>
            <Link className="vk-logo" to="https://vk.com/widget_community.php?act=a_subscribe_box&oid=-219907410&state=1" target="_blank" rel="noopener noreferrer">
                <img src="./img/vk.png" alt="Logo" />
            </Link>
        </header>
    );  
};

export default Header;
