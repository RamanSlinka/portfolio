import React from 'react'
import s from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./work/Project";
import Title from "../common/Components/Title/Title";
import todoImage from './../assets/image/TodoList.jpg'
import socialImage from './../assets/image/social-network.jpg'
import postImage from './../assets/image/Social-media-posting.jpg'
import chuckImage from './../assets/image/chucknorris_logo.png'


function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`
    };
    const mediaPost = {
        backgroundImage: `url(${postImage})`
    };
    const chuckNorris = {
        backgroundImage: `url(${chuckImage})`
    };

    //  const linkSN = "https://RamanSlinka.github.io/SocialNetwork_ts" ;
    const linkTL = "https://RamanSlinka.github.io/CopyTodo";
    const viewCodeSN = "https://github.com/RamanSlinka/SocialNetwork_ts";
    const viewCodeTL = "https://github.com/RamanSlinka/CopyTodo";
    const linkSMP = "https://RamanSlinka.github.io/posts-app";
    const viewCodeSMP = "https://github.com/RamanSlinka/posts-app";
    const linkChuckNorris = "https://RamanSlinka.github.io/my_test_ChuckNorris";
    const viewCodeChuckNorris = "https://github.com/RamanSlinka/my_test_ChuckNorris";

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
                    <Project
                        link={linkSMP}
                        style={mediaPost}
                        title={'Social Media Posting'}
                        description={'A web application designed to publish information in the form of posts, search and filter (among existing posts), as well as display information for each post separately.\n' +
                        '\n' +
                        'Technologies:\n' +
                        'ReactJS,use Hooks (+ custom hooks),Modal window,  Formik, Pagination, Sorting, Drop-down list, Search, Filtration .'}
                        viewCode={viewCodeSMP}
                    />
                    <Project
                        link={linkChuckNorris}
                        style={chuckNorris}
                        title={'Chuck Norris facts'}
                        description={'A mini web application for displaying facts about Chuck Norris (taken from "chucknorris.io"  - is a free JSON API) \n' +
                        '\n' +
                        'Technologies:\n' +
                        'ReactJS,  TS, Redux, Redux-thunk, Axios .'}
                        viewCode={viewCodeChuckNorris}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;