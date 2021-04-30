import React from 'react'
import s from './Nav.module.css'

function Nav() {
    return (
        <div className={s.nav}>
            <a href="Главная">Главная</a>
            <a href="Скилы">Скилы</a>
            <a href="Проекты">Проекты</a>
            <a href="Контакты">Контакты</a>

        </div>
    );
}

export default Nav;
