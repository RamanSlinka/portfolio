import React from 'react'
import s from './DistantWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

function DistantWork() {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.descriptionBlock}`}>
                <h3>Considering options for distant work</h3>
                <button className={styleContainer.button}>hire me</button>
            </div>
        </div>
    )
}

export default DistantWork;