import React from 'react'
import s from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Contacts () {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contacts}`}>
                <h3>Contacts</h3>
                    <form action="URL" className={s.form}>
                        <input type="text" className={s.input}/>
                        <input type="text" className={s.input}/>
                        <textarea placeholder={'Enter your question'} ></textarea>
                    </form>
                <button type="submit" className={styleContainer.button}>Send</button>
            </div>

        </div>
    )
}
export default Contacts