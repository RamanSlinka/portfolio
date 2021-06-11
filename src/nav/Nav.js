import React from 'react'
import s from './Nav.module.scss'

function Nav() {
    return (
        <div className={s.nav}>
            <a >Main</a>
            <a >Skills</a>
            <a >Projects</a>
            <a >Contact</a>

        </div>
    );
}

export default Nav;
