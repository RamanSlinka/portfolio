import React from 'react'
import s from './Main.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>
                        I am Raman Slinka
                    </h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src="###" alt="my best photo:)"/>
                </div>
            </div>
        </div>
    );
}

export default Main;