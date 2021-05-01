import React from 'react'
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'React'}
                           description={'lorem lorem  ta-ta-tu ta-ta-ta ta-ta-ta lorem lorem'}
                    />
                    <Skill title={'CSS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'TS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'Redux'}
                           description={'lorem lorem lorem lorem'}
                    />

                </div>
            </div>
        </div>
    );
}

export default Skills;