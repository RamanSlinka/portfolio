import React from 'react'
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import myPhotoImage from './../assets/image/myPhoto.jpg'
// import Particles from "react-particles-js";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                values_area: 800
            }
        }
    }
};


function Main() {

    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`,
    };
    return (
        <div id='main' className={s.mainBlock}>
            {/*<Particles className={s.particles} params={particlesOptions} />*/}
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