import React from 'react'
import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faReact} from '@fortawesome/free-brands-svg-icons'
// import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={props.icon}/>
            </div >
            <h3 >{props.title}</h3>
            <span >{props.description}</span>
        </div>
    );
}

export default Skill;