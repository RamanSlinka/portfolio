import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Components/Title/Title";
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { faReact, faSass, faHtml5, faCss3, faJs,
    faGithub, faGit, faReacteurope,faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'



function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>

                <div className={s.skills}>
                    {/*<FontAwesomeIcon icon={faEnvelope}/>*/}
                    <Skill
                        icon={faHtml5}
                        title={'HTML'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={faCss3}

                        title={'CSS'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={faSass}
                        title={'SCSS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={faJs}
                        title={'JS'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={faReact}
                        title={'React'}
                           description={'lorem lorem  ta-ta-tu ta-ta-ta ta-ta lorem'}
                    />
                    <Skill
                        icon={faReacteurope}
                        title={'Redux'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={faEnvelopeOpen}
                        title={'Redux Thunk'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill

                        title={'TS'}
                           description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={faGit}
                        title={'Git'}
                           description={'lorem lorem lorem lorem'}
                    />


                </div>
            </div>
        </div>
    );
}

export default Skills;