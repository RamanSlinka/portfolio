import React from 'react'
import s from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/Components/Title/Title";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer}`}>
                <Title text={'Raman Slinka'}/>
                <div className={s.socialNetworks}>
                    <div className={s.SN}>facebook</div>
                    <div className={s.SN}>gitHub</div>
                    <div className={s.SN}>linkedIn</div>
                    <div className={s.SN}>gmail</div>
                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </div>
    )
}

export default Footer;