import React from 'react'
import s from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./work/Project";
import Title from "../common/Components/Title/Title";
import todoImage from './../assets/image/TodoList.jpg'
import socialImage from './../assets/image/social-network.jpg'
import postImage from './../assets/image/Social-media-posting.jpg'
import chuckImage from './../assets/image/chucknorris_logo.png'
import note from './../assets/image/note.jpg'
import website from './../assets/image/website_1.jpg'


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
    const noteApp = {
        backgroundImage: `url(${note})`
    };
    const website1 = {
        backgroundImage: `url(${website})`,
    };
   // const website = {backgroundImage: `url(${website})`};

    const linkSN = "https://RamanSlinka.github.io/SocialNetwork_ts" ;
    const linkTL = "https://RamanSlinka.github.io/CopyTodo";
    const viewCodeSN = "https://github.com/RamanSlinka/SocialNetwork_ts";
    const viewCodeTL = "https://github.com/RamanSlinka/CopyTodo";
    const linkSMP = "https://RamanSlinka.github.io/posts-app";
    const viewCodeSMP = "https://github.com/RamanSlinka/posts-app";
    const linkChuckNorris = "https://RamanSlinka.github.io/my_test_ChuckNorris";
    const viewCodeChuckNorris = "https://github.com/RamanSlinka/my_test_ChuckNorris";
    const linkNote = "https://react-miniapp-notes.firebaseapp.com/";
    const viewNote = "https://github.com/RamanSlinka/mini-app-notes";
    const linkWebSite =  "https://RamanSlinka.github.io/radaway_presentation_app";
    const viewWebSite = "https://github.com/RamanSlinka/radaway_presentation_app";

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>

                    <Project
                        link={linkTL}
                        style={todoList}
                        title={'TodoList'}
                        description={'Web application designed to conveniently structure information about all current tasks in one place.  \n' +
                        '\n' + 'Technologies:\n' +
                        'ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Storybook.' }
                        viewCode={viewCodeTL}
                    />
                    <Project
                        link={linkSN}
                        style={socialNetwork}
                        title={'Social Network'}
                        description={'Web application that allows registered users to post information and communicate with each other.   \n' +
                        '\n' +
                        'Technologies:\n' +
                        'ReactJS, TS, Redux-thunk, Axios, Redux-form, CSS.'}
                        viewCode={viewCodeSN}
                    />
                    <Project
                        link={linkWebSite}
                        style={website1}
                        title={'Website presentation ver.'}
                        description={'A mini  website created by origin layout (Pixel Perfect)  with ReactJS. \n' +
                        '\n' +
                        'Technologies:\n' +
                        'HTML, SCSS, ReactJS,  Routing,  Bootstrap, Formik, React icons'}
                        viewCode={viewWebSite}
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

                    {/*<Project*/}
                    {/*    link={linkNote}*/}
                    {/*    style={noteApp}*/}
                    {/*    title={'Notes App'}*/}
                    {/*    description={'A mini web  application designed for recording and/or deleting tasks. Recorded tasks are stored on a remote server.(Server blocked) \n' +*/}
                    {/*    '\n' +*/}
                    {/*    'Technologies:\n' +*/}
                    {/*    'ReactJS, hooks, Routing, Axios, Firebase, Hosting, Bootstrap.'}*/}
                    {/*    viewCode={viewNote}*/}
                    {/*/>*/}

                </div>
            </div>
        </div>
    );
}

export default Projects;