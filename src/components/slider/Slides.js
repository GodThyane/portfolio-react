import "./Slider.css"
import farrapp from "../../images/FarrApp.png"
import redsocial from "../../images/RedSocial.png"
import sigeppi from "../../images/ProjectInvestigation.png"
import nutresa from "../../images/IngresosNutresa.png"
import argos from "../../images/IngresosArgos.png"

const slidesInfo = [
    {
        src: nutresa,
        alt: "Ingresos Nutresa",
        desc: "Ingresos Nutresa"
    }
    ,
    {
        src: argos,
        alt: "Ingresos Argos",
        desc: "Ingresos Argos"
    }
    ,
    {
        src:farrapp,
        alt:"FarrApp",
        desc: "FarrApp",
        url: "https://github.com/GodThyane/farrapp-front"
    },
    {
        src:redsocial,
        alt:"Red Social",
        desc: "Red Social",
        url: "https://github.com/GodThyane/social-network"
    },
    {
        src:sigeppi,
        alt:"Sigeppi",
        desc: "Sigeppi",
        url: "https://github.com/GodThyane/project-investigation"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={slide.url} target="_blank" rel="noreferrer">
            <img src={slide.src} alt={slide.alt}/>
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>

))

export default slides;
