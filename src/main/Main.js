import React from 'react';
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";


const particlesOptions = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 8,
            "density": {
                "enable": true,
                "value_area": 300
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "star",
            "options": {
                "sides": 5
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        // "line_linked": {
        //     "enable": true,
        //     "distance": 600,
        //     "color": "#ffffff",
        //     "opacity": 0.4,
        //     "width": 2
        // },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    }
}


const Main = () => {
    const anInitFunction = async (main) => {
        await loadFull(main)
    }

    return (
        <div className={style.mainBlock}>
            <Particles id="particles-here" init={anInitFunction} options={particlesOptions}/>
            <div className={style.container}>
                <div>
                    <h3 className={style.name}>
                        <span className={style.i}>I </span>
                        am Inna.
                    </h3>
                    <span className={style.frontend}>Frontend Developer</span>
                </div>
                    <div className={style.photo}>
                        <div className={style.photoImage}></div>
                    </div>
            </div>
        </div>
);
};

export default Main;