import React from 'react'
import s from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/Components/Title/Title";
import {    faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer}`}>
                <Title text={'Raman Slinka'}/>
                <div className={s.socialNetworks}>
                    <div className={s.SN}>
                        <FontAwesomeIcon icon={faTelegram}/>
                        Telegram</div>
                    <div className={s.SN}>
                        <FontAwesomeIcon icon={faGithub}/>
                        gitHub</div>
                    <div className={s.SN}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                        linkedIn</div>
                    <div className={s.SN}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        gmail</div>
                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </div>
    )
}

export default Footer;