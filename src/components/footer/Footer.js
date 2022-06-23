import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h1>José Daza Díaz</h1>
                <p>Based in Your City</p>
            </div>
            <div className="footer-contact">
                <h3>Contáctame</h3>
                <p>Y pongámonos manos a la obra</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Diseñado por José Daza Díaz
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/jos%C3%A9-ismael-daza-d%C3%ADaz-5b8257215" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin red-social"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter red-social"/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook red-social"/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-github red-social"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
