import React from 'react'
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/Components/Title/Title";

function Contacts () {
    return (
        <div id='contact' className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contacts}`}>
                <Title text={'Contact'}/>
                    <form action="URL" className={s.form}>
                        <input type="text" className={s.input}
                        placeholder={'name'}
                        />
                        <input type="email" className={s.input}
                        placeholder={'E-mail'}
                        />
                        <textarea placeholder={'Enter your question'} />
                    </form>
                <button type="submit" className={styleContainer.button}><span className={styleContainer.descriptionBtn}>Send message</span></button>
            </div>

        </div>
    )
}
export default Contacts