import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Components/Title/Title";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//  import {f13b} from '@fortawesome/free-brands-svg-icons'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'



function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    {/*<FontAwesomeIcon icon={faEnvelope}/>*/}
                    <Skill
                        icon={faEnvelope}
                        title={'HTML'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        // icon={f13b}

                        title={'CSS'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'SCSS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        title={'JS'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'React'}
                           description={'lorem lorem  ta-ta-tu ta-ta-ta ta-ta lorem'}
                    />
                    <Skill title={'Redux'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'Thunk'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'TS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill title={'Git'}
                           description={'lorem lorem lorem lorem'}
                    />


                </div>
            </div>
        </div>
    );
}

export default Skills;