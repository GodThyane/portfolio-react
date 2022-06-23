import React from 'react';
import Typewriter from 'typewriter-effect';

import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4"

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <h1>José Daza Díaz</h1>

            <div style={{display: "flex"}}>
                <p>
                    Desarrollador
                </p>
                <p>
                    <Typewriter
                        options={{
                            strings: [' Front-End: Angular 12',' Back-End: .NET Core'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </div>
        </div>
    );
};

export default Cover;
