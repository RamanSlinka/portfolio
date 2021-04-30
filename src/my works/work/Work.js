import React from 'react'
import s from './Work.module.css'

function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.img}>
                {props.img}
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;