import React from 'react'
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/Components/Title/Title";
import emailjs from 'emailjs-com';


function Contacts() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_4e1ddah', 'template_9x2ipjy',
            e.target, 'user_mnUCEEr4By9wSIzyUVj9X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <div id='contact' className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contacts}`}>
                <Title text={'Contact'}/>
                <form onSubmit={sendEmail} className={s.form}>
                    <input type="text" className={s.input}
                           placeholder={'name'}
                           name='from_name'
                    />
                    <input type="email" className={s.input}
                           placeholder={'E-mail'}
                           name='from_name'
                    />
                    {/*<input type="text" className={s.input}*/}
                    {/*       placeholder={'subject'} name='from_name'*/}
                    {/*/>*/}
                    <textarea placeholder={'Enter your question'}
                    name='message'
                    />
                    <button type="submit"
                            className={styleContainer.button}
                        //className={`${styleContainer.button} ${s.btn}`}
                                     ><span className={styleContainer.descriptionBtn}>Send message</span>
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Contacts