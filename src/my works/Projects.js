import React from 'react'
import s from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./work/Project";
import Title from "../common/Components/Title/Title";
import todoImage from './../assets/image/task-list.jpeg'
import socialImage from './../assets/image/social-network.jpg'
import pizzaShopImage from './../assets/image/pizza-labels.jpg'
import postImage from './../assets/image/post1.jpg'
import cloudDiskImage from './../assets/image/cloud.jpg'
import websiteImage from './../assets/image/website_1.jpg'


function Projects() {
    const pizzaShop = {
        backgroundImage: `url(${pizzaShopImage})`,
    };

    const cloudDisk = {
        backgroundImage: `url(${cloudDiskImage})`
    };
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`
    };
    const mediaPost = {
        backgroundImage: `url(${postImage})`
    };

    const website = {
        backgroundImage: `url(${websiteImage})`,
    };

    const linkSN = "https://RamanSlinka.github.io/SocialNetwork_ts";
    const linkTL = "https://RamanSlinka.github.io/CopyTodo";

    const viewCodeSN = "https://github.com/RamanSlinka/SocialNetwork_ts";
    const viewCodeTL = "https://github.com/RamanSlinka/CopyTodo";

    const linkSMP = "https://RamanSlinka.github.io/posts-app";
    const viewCodeSMP = "https://github.com/RamanSlinka/posts-app";

    const linkCloudDisk = "https://mern-cloud-disk-client.herokuapp.com/";
    const viewCodeCloudDisk = "https://github.com/RamanSlinka/mern-cloud-disk";

    const linkWebSite = "https://RamanSlinka.github.io/radaway_presentation_app";
    const viewWebSite = "https://github.com/RamanSlinka/radaway_presentation_app";

    const linkStore = "https://RamanSlinka.github.io/pizza-shop-v.2";
    const viewStore = "https://github.com/RamanSlinka/pizza-shop-v.2";

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>

                    <Project
                        link={linkStore}
                        style={pizzaShop}
                        title={'Pizza shop (in progress...)'}
                        description={'Web application - online Pizza shop (in progress...).  \n' +
                            '\n' + 'Technologies:\n' +
                            'ReactJS, TS, Redux-thunk, Axios, (in progress...)'}
                        viewCode={viewStore}
                    />

                    <Project
                        link={linkCloudDisk}
                        style={cloudDisk}
                        title={'Cloud Disk'}
                        description={'This is a web application where you can upload and store your files. First create an account and register. Files can be sorted,' +
                            ' filtered and deleted. Saved files can later be downloaded to any of your own devices.) \n' +
                            '\n' +
                            'Technologies:\n' +
                            ' MERN  such as: MongoDB, Express, React, NodeJs .' +
                            '  N.B.! For more information about the technologies used, see the link below.'}
                        viewCode={viewCodeCloudDisk}
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
                        style={website}
                        title={'Website presentation ver.'}
                        description={'A mini  website created by origin layout (Pixel Perfect)  with ReactJS. \n' +
                            '\n' +
                            'Technologies:\n' +
                            'HTML, SCSS, ReactJS,  Routing,  Bootstrap, Formik, React icons'}
                        viewCode={viewWebSite}
                    />

                    <Project
                        link={linkTL}
                        style={todoList}
                        title={'TodoList'}
                        description={'Web application designed to conveniently structure information about all current tasks in one place.  \n' +
                            '\n' + 'Technologies:\n' +
                            'ReactJS, TS, Redux-thunk, Axios, Formik, Material UI, Storybook.'}
                        viewCode={viewCodeTL}
                    />
                    <Project
                        link={linkSMP}
                        style={mediaPost}
                        title={'Social Media Posting'}
                        description={'A web application designed to publish information in the form of posts, search and filter ' +
                            '(among existing posts), as well as display information for each post separately.\n' +
                            '\n' +
                            'Technologies:\n' +
                            'ReactJS,use Hooks (+ custom hooks),Modal window,  Formik, Pagination, Sorting, Drop-down list, Search, Filtration .'}
                        viewCode={viewCodeSMP}
                    />




                </div>
            </div>
        </div>
    );
}

export default Projects;