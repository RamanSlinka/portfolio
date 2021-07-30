import React from 'react'
import s from './Project.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";


function Project(props) {

    return (
        <div className={s.project}>
            <div className={s.imageContainer} style={props.style}>
                {/*<button*/}
                {/*    onClick={props.onClick}*/}
                {/*    className={styleContainer.button}><span className={styleContainer.descriptionBtn}>look</span></button>*/}
                <a href={props.link}
                   target="_blank"
                   className={styleContainer.button} style={{height: '40px', width: '85px', paddingTop: '5px'}}>Click and view</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}
                 <br/>>  <a href={props.viewCode} >YOU CAN SEE CODE ON GITHUB</a>
                </span>

            </div>
        </div>
    )
}

export default Project;