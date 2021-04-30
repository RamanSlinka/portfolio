import React from 'react'
import s from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";

import Work from "./work/Work";


function MyWorks(props) {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work
                        img={`<img src="###" alt="my project">`}
                        title={'the name of the project'}
                        description={'lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem'}
                    />
                    <Work
                        img={`<img src="###" alt="my project">`}
                        title={'the name of the project'}
                        description={'lorem lorem   ta-ta-tu ta-ta-ta ta-ta-ta lorem lorem lorem'}
                    />

                </div>

            </div>
        </div>
    );
}

export default MyWorks;