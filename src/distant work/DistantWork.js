import React, {useState} from 'react'
import s from './DistantWork.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/Components/Title/Title";

function DistantWork() {
    const [state, setState] = useState(false);
    const btnHandler = () => {
        setState(!state)
    }

    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.descriptionBlock}`}>
                <Title text={'I will consider the option of remote work'}/>
                <div>

                    <button
                        onClick={btnHandler}
                        className={styleContainer.button}><span className={styleContainer.descriptionBtn}>hire me</span>
                    </button>
                </div>
                <div className={s.phone}>
                    {state ? <h4>+48 511 455 493
                    <p className={s.phoneMessage}>or fill out the form</p>
                    </h4> : ''}
                </div>
            </div>

        </div>
    )
}

export default DistantWork;