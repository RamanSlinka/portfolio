import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Components/Title/Title";
import {SiTypescript, SiRedux, SiHtml5, SiCss3,SiJavascript, SiReact} from 'react-icons/si';
import { DiSass} from 'react-icons/di';
import { FaGit} from 'react-icons/fa';




function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>

                <div className={s.skills}>

                    <Skill
                        icon={<SiHtml5/>}
                        title={'HTML'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<SiCss3/>}

                        title={'CSS'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<DiSass/>}
                        title={'SCSS'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<SiJavascript/>}
                        title={'Java Script'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<SiReact/>}
                        title={'React'}
                        description={'lorem lorem  ta-ta-tu ta-ta-ta ta-ta lorem'}
                    />
                    <Skill
                        icon={<SiRedux/>}
                        title={'Redux'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<SiRedux/>}
                        title={'Redux Thunk'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<SiTypescript/>}
                        title={'Type Script'}
                        description={'lorem lorem lorem lorem'}
                    />
                    <Skill
                        icon={<FaGit/>}
                        title={'Git'}
                        description={'lorem lorem lorem lorem'}
                    />


                </div>
            </div>
        </div>
    );
}

export default Skills;