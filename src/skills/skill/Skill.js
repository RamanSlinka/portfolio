import React from 'react'
import s from './Skill.module.scss'


function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.iconContainer}>
                <div className={s.icon}> {props.icon}</div>
            </div >
            <h3 className={s.title}>{props.title}</h3>
            <span >{props.description}</span>
        </div>
    );
}

export default Skill;