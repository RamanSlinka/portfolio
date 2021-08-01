import React from 'react'
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import myPhotoImage from './../assets/image/myPhoto.jpg'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import Particles from "react-tsparticles";



const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 3,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#4e93e6",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
}

function Main() {

    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`,
    };
    return (
        <div id='main' className={s.mainBlock}>
            <Particles params={particlesOptions} className={s.particles}
            />

            <Fade top>
                <div className={styleContainer.container}>
                    <div className={s.text}>
                        <span className={s.greeting}>Hi There</span>
                        <h1>
                            I am &nbsp;
                            <span>   Raman </span> <span> Slinka</span>
                        </h1>
                        <p>
                            <ReactTypingEffect
                                text={["Frontend Developer"]}
                            />
                        </p>
                    </div>

                    <Tilt className="Tilt" options={{max: 25}} >
                        <div className={s.photo}
                             style={myPhoto} >

                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

export default Main;