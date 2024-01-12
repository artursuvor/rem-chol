import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import './HeaderMobile.css';

const Header: React.FC = () => {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 110)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])     
    
    const phoneImage = document.getElementById('phoneImage') as HTMLImageElement | null;
    if (phoneImage) {
        phoneImage.addEventListener('click', () => {
            window.location.href = 'tel:+79823435703';
        });
    }
    return (
        <header className={isSticky  ? 'sticky-header-mobile' : 'header-mobile'}>
            <Link className="site-logo-mobile" to="/" rel="noopener noreferrer">
                <img src="./img/logo.png" alt="Logo" />
            </Link>
            <div className="telephone-container-mobile">
                <a href="tel:+79823435703">8 (982) 343-57-03</a>
                <img src="./img/tel.png" alt="Telephone" id="phoneImage"/>
            </div>
            <Link className="vk-logo-mobile" to="https://vk.com/widget_community.php?act=a_subscribe_box&oid=-219907410&state=1" target="_blank" rel="noopener noreferrer">
                <div className="vk-content-mobile">
                    <img src="./img/vk.png" alt="VK Logo" />
                    <span className="discount-text-mobile">Подписчикам скидка</span>
                </div>
            </Link>

        </header>
    );  
};

export default Header;
