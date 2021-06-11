import React from 'react'
import s from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.scss'

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer}`}>
                <h3>Raman Slinka</h3>
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