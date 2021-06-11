import React from 'react'
import s from './Main.module.scss'
import styleContainer from '../../src/common/styles/Container.module.css'
import myPhotoImage from './../assets/image/myPhoto.jpg'

function Main() {

    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`,
    };

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>
                        I am &nbsp;
                        <span>   Raman Slinka</span>
                    </h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}
                     style={myPhoto}
                >

                </div>
            </div>
        </div>
    );
}

export default Main;