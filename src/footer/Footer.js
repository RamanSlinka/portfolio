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
                        <a href="">Telegram
                        <FontAwesomeIcon icon={faTelegram}/>
                        </a>
                        </div>
                    <div className={s.SN}>
                        <a href="https://github.com/RamanSlinka">
                        <FontAwesomeIcon icon={faGithub}/>
                        gitHub
                        </a></div>
                    <div className={s.SN}>
                        <a href="">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        linkedIn
                        </a></div>
                    <div className={s.SN}>
                        <a href="">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        gmail
                        </a></div>
                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </div>
    )
}

export default Footer;