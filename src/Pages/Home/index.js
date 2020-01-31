import React from 'react';
import "./home.css";
import Image1 from "./Placeholder.png";
import Image2 from "./Player.png";
import { Carousel } from 'react-responsive-carousel';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

function Index() {
    const images = [
        { 
            src: "http://lorempixel.com/output/cats-q-c-640-480-1.jpg",
            name: "Image 1",
        },
        { 
            src: "http://lorempixel.com/output/cats-q-c-640-480-2.jpg",
            name: "Image 2",
        },
        { 
            src: "http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
            name: "Image 3",
        },
        { 
            src: require("./Placeholder.png"),
            name: "Image 4",
        },
        { 
            src: require("./Player.png"),
            name: "Image 5",
        },
    ];
    return (
        <div className="homeStyle">
            <h1>Home</h1>
 
           <div className="imageStyle">
            <Carousel className="egg" autoPlay infiniteLoop={true}>
                {
                    images.map(c => {
                        return (
                        <div key={c.name}>
                            <img src={c.src} alt="placeholder"></img>
                            <p>{c.name}</p>
                        </div>);
                    })
                }                  
            </Carousel>
            </div>   
        </div>
    );
}

export default Index;