import React, {useState} from 'react'
import s from './DistantWork.module.scss'
import styles from '../my works/work/Project.module.scss'

import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/Components/Title/Title";
import CV from "../assets/files/CV_RamanSlinka.pdf"
import Svg_CV from "../assets/files/Gif_CV_R.Slinka.gif"

function DistantWork() {
    const [state, setState] = useState(false);
    const btnHandler = () => {
        setState(!state)
    }

    return (
        <div className={s.distantWorkBlock} id='CV'>
            <div className={`${styleContainer.container} ${s.descriptionBlock}`}>
                <Title text={'I will consider the option of remote work'}/>
                <div>

                    <button
                        onClick={btnHandler}
                        className={styleContainer.button}><span className={styleContainer.descriptionBtn}>hire me</span>
                    </button>
                </div>
                <div className={s.phone}>
                    {state ? <h4>+48 511 455 493
                    <p className={s.phoneMessage}>or fill out the form</p>
                    </h4> : ''}
                </div>
                <div className={s.descriptionBlock} >
                    <a href={CV}
                       target="blank"
                       className={styleContainer.button} style={{height: '30px', width: '75px', paddingTop: '7px'}}>
                        CV Here</a>
                </div>
                <div className={styles.imageContainer} >
                    <img className={s.CV}
                        src={Svg_CV} alt="CV"/>
                </div>
            </div>

        </div>
    )
}

export default DistantWork;