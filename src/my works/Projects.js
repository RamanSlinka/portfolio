import React from 'react'
import s from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.scss";

import Project from "./work/Project";
import Title from "../common/Components/Title/Title";
import todoImage from './../assets/image/TodoList.jpg'
import socialImage from './../assets/image/social-network.jpg'


function Projects(props) {
    const socialNetwork = {
                backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
                backgroundImage: `url(${todoImage})`
    };
    const linkSN = "https://RamanSlinka.github.io/SocialNetwork_ts" ;
    const linkTL = "https://RamanSlinka.github.io/CopyTodo";
    const viewCodeSN = "https://github.com/RamanSlinka/SocialNetwork_ts";
    const viewCodeTL = "https://github.com/RamanSlinka/TodoList";

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
               <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project
                        link={viewCodeSN}    // in time
                        style={socialNetwork}
                        title={'Social Network'}
                        description={'Web application that allows registered users to post information and communicate with each other.\n' +
                        '\n' +
                        'Technologies:\n' +
                        'ReactJS, TS, Redux-thunk, Axios, Redux-form, CSS.'}
                        viewCode={viewCodeSN}
                    />
                    <Project
                        link={linkTL}
                        style={todoList}
                        title={'TodoList'}
                        description={'Web application designed to conveniently structure information about all current tasks in one place.\n' +
                        '\n' +
                        'Technologies:\n' +
                        'ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Storybook.'}
                        viewCode={viewCodeTL}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;