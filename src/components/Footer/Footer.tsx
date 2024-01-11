import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>&#9989; Я являюсь частным мастером и не сотрудничаю с компаниями, даю гарантию на свою работу.</p>
            </div>
            <div className="footer-right">
                <p>Email: artemsuvor@gmail.com</p>
                <p>Телефон: <a href="tel:+79823435703">8 (982) 343-57-03</a></p>
            </div>
        </footer>
    )
}