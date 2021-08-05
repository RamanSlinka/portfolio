import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Components/Title/Title";
import {SiTypescript, SiRedux, SiHtml5, SiCss3, SiJavascript, SiReact, SiJest} from 'react-icons/si';
import {DiSass} from 'react-icons/di';
import {FaGit, FaNetworkWired} from 'react-icons/fa';
import {RiTeamLine} from "react-icons/all";
import Zoom from "react-reveal/Zoom";

function Skills() {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>

                <div className={s.skills}>
                    <Zoom clear>
                        <Skill
                            icon={<SiJavascript/>}
                            title={'Java Script'}
                            description={'Conditions, Loops and iteration, Grammar and types, Functions, Using promises, Arrays, Expressions and operators, Objects, Regular expressions, etc....'}
                        />
                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<SiReact/>}
                            title={'React'}
                            description={'SPA, Props, Route, UI, BLL, State, VirtualDOM, FLUX, REST API, Pure function, Hooks, UseEffect, High Order Component (hoc), Life cycle methods, ComponentDidMount, etc...'}
                        /></Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<SiRedux/>}
                            title={'Redux'}
                            description={' Connect, Reducer, Action creator, Dispatch, Redux-ducks, MapStateToProps, Redux-form,  DAL,  mapDispatchToProps, etc...'}
                        />
                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<FaGit/>}
                            title={'Git'}
                            description={'Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.'}
                        />

                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<FaNetworkWired/>}
                            title={'REST API'}
                            description={'Context API, Axios.create,'}
                        />
                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<SiTypescript/>}
                            title={'Type Script'}
                            description={'Basic Types, Classes, Advanced Types, Declaration Merging, Decorators, Enums, Functions, Interfaces, JSX, Mixins,Modules, Namespaces, Symbols, etc...'}
                        />
                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<SiJest/>}
                            title={'JEST'}
                            description={'Using for testing reducers in SPA'}
                        />

                    </Zoom>


                    <Zoom clear>
                        <Skill
                            icon={<RiTeamLine/>}
                            title={'Teamwork'}
                            description={'Project development in a team of 4 people. Planning, discussion, decision making. Team meetings.\n' +
                            'Review code. Working with GIT.'}
                        />
                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<SiHtml5/>}
                            title={'HTML'}
                            description={'IDE (WebStorm, VSCode), Adaptive layout, Semantic HTML, Browsers, DevTools, Responsive layout, SVG, Media (Audio, Video, Maps), Fonts, Forms, etc...'}
                        />
                    </Zoom>
                    <Zoom clear>
                        <Skill
                            icon={<SiCss3/>}
                            title={'CSS'}
                            description={'Selectors, Animation, FlexBox and Grid, Bootstrap, CanIUse, Table layout, WebPack, Media queries, Gulp, Mobile layout, etc...'}
                        />
                    </Zoom>

                    <Zoom clear>
                        <Skill
                            icon={<DiSass/>}
                            title={'SCSS'}
                            description={' Css preprocessors (Sass, Less)'}
                        /></Zoom>


                </div>
            </div>
        </div>
    );
}

export default Skills;