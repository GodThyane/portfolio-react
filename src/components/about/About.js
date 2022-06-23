import React from 'react';
import "./About.css";
import image from "../../images/About.png"


const About = () => {
    return (
        <div className="about-container">
            <div className="about-description">
                <h3>Acerca de mí</h3>
                <p>¡Hola! Soy Ingeniero de Sistemas y Computación (Universidad Pedagógica y Tecnológica de Colombia).
                    Con gran interés en el desarrollo web (Frontend-Angular, BackEnd-.Net CORE). Con capacidad para
                    aprender y aplicar mis conocimientos al ámbito profesional.</p>

                    <p style={{paddingTop: '20px', paddingBottom: '15px'}}><strong>Cuento con experiencia laboral
                        en:</strong></p>

                    <ul style={{paddingLeft:'30px'}}>
                        <li>Desarrollo Front-End en Angular 10+.</li>
                        <li>Desarrollo Back-End en .Net Core.</li>
                        <li>Bases de datos Relacionales (Microsoft SQL Server).</li>
                        <li>Uso de metodologías ágiles.</li>
                        <li>CI y CD con Azure DevOps.</li>
                        <li>Frameworks de UI (PrimeNG, Bootstrap y Angular Material)</li>
                        <li>Documentación API con Swagger</li>
                    </ul>
            </div>
            <div className="about-img">
                <img src={image} alt="José Daza Díaz"/>
            </div>
        </div>
    );
};

export default About;
