import React from 'react'
import s from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.css";

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
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
               <Title text={'My works'}/>
                <div className={s.projects}>
                    <Project
                        style={socialNetwork}
                        title={'Social Network'}
                        description={'lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem'}
                    />
                    <Project
                        style={todoList}
                        title={'TodoList'}
                        description={'lorem lorem   ta-ta-tu ta-ta-ta ta-ta-ta lorem lorem lorem'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;