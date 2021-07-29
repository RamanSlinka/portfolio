import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Components/Title/Title";
import {SiTypescript, SiRedux, SiHtml5, SiCss3, SiJavascript, SiReact} from 'react-icons/si';
import {DiSass} from 'react-icons/di';
import {FaGit, FaNetworkWired} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {RiTeamLine} from "react-icons/all";


function Skills() {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>

                <div className={s.skills}>
                    <Fade top>
                        <Skill
                            icon={<SiJavascript/>}
                            title={'Java Script'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>

                    <Fade bottom>
                        <Skill
                            icon={<SiReact/>}
                            title={'React'}
                            description={'lorem lorem  ta-ta-tu ta-ta-ta ta-ta lorem'}
                        /></Fade>

                    <Fade top>
                        <Skill
                            icon={<SiRedux/>}
                            title={'Redux'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>

                    <Fade bottom>
                        <Skill
                            icon={<SiRedux/>}
                            title={'Redux Thunk'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>

                    <Fade top>
                        <Skill
                            icon={<SiTypescript/>}
                            title={'Type Script'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>

                    <Fade bottom>
                        <Skill
                            icon={<FaNetworkWired/>}
                            title={'REST API'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>

                    <Fade bottom>

                        <Skill
                            icon={<FaGit/>}
                            title={'Git'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>


                    <Fade top>
                        <Skill
                            icon={<RiTeamLine/>}
                            title={'Teamwork'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>

                    <Fade bottom>
                        <Skill
                            icon={<SiHtml5/>}
                            title={'HTML'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>
                    <Fade top>
                        <Skill
                            icon={<SiCss3/>}

                            title={'CSS'}
                            description={'lorem lorem lorem lorem'}
                        />
                    </Fade>





                    <Skill
                        icon={<DiSass/>}
                        title={'SCSS'}
                        description={'lorem lorem lorem lorem'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;