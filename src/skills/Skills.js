import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Components/Title/Title";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
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