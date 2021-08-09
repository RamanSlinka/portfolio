import React from 'react'
import s from './Project.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Zoom from "react-reveal/Zoom";


function Project(props) {

    return (
        <Zoom clear>
            <div className={s.project}>
                <div className={s.imageContainer} style={props.style}>
                    <a href={props.link}
                       target="blank"
                       className={styleContainer.button} style={{height: '40px', width: '85px', paddingTop: '5px'}}>Click
                        and view</a>
                </div>
                <div className={s.projectInfo}>
                    <h3 className={s.projectTitle}>{props.title}</h3>
                    <span className={s.description}>{props.description}
                        <br/>>  <a href={props.viewCode}
                                   target="blank"
                        >YOU CAN SEE CODE ON GITHUB</a>
                </span>

                </div>
            </div>
        </Zoom>
    )
}

export default Project;