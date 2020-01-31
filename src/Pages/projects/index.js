import React from 'react';
import "./projects.css";
import Image from "./Player.png"

function Index() {
    return (     
        <div className="projectStyle">
            <h1>Projects</h1>

            <img src={Image} alt="Dude with a sword" width="104" height="142"></img>
        </div>
    );
}

export default Index;