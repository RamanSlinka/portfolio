import React from 'react'
import s from './DistantWork.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/Components/Title/Title";

function DistantWork() {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.descriptionBlock}`}>
                <Title text={'I will consider the option of remote work'}/>
                <div>

                    <button className={styleContainer.button}> <span className={styleContainer.descriptionBtn}>hire me</span></button>
                </div>
            </div>

        </div>
    )
}

export default DistantWork;