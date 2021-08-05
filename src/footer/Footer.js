import React from 'react'
import s from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/Components/Title/Title";
import {faGithub, faInstagram, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer}`}>
                <Title text={'Raman Slinka'}/>
                <div className={s.socialNetworks}>
                    <div className={s.SN}>
                        <a href="https://t.me/FamaGrodziensky" rel="noreferrer">
                        <FontAwesomeIcon icon={faTelegram}/>
                            telegram
                        </a>
                        </div>
                    <div className={s.SN}>
                        <a href="https://github.com/RamanSlinka" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                        gitHub
                        </a></div>
                    <div className={s.SN}>
                        <a href="https://www.linkedin.com/in/raman-slinka" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        linkedIn
                        </a></div>
                    <div className={s.SN}>
                        <a href="https://www.instagram.com/raman_slinka/" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                            instagram
                        </a></div>
                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </div>
    )
}

export default Footer;