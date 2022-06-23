import React from 'react';
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel'
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./Slides"
import "./Slider.css"

const MyComponent = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
            </div>

            <Carousel
                plugins={[
                    'infinite',
                    'arrows',
                    'centered',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    }
                ]}
                animationSpeed={500}
                offset={50}
                itemWidth={400}
                slides={Slides}
            />
        </div>
    );
};

export default MyComponent;
