import React, {useRef, useState} from 'react';
import s from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/Components/Title/Title";
import emailjs from 'emailjs-com';
import {useFormik} from "formik";
import Zoom from "react-reveal/Zoom";

function Contacts() {

    const [success, setSuccess] = useState(false);
    let [error, setError] = useState(false);


    const formRef = useRef(null)
    let sendEmail = () => {
        emailjs.send('service_tqyq6kj', 'template_9x2ipjy',
            {
                to_name: formik.values.userName,
                from_name: formik.values.email,
                message: formik.values.textarea
            }, 'nzNTTdjJF4OfXs4sH')    //Public Key

            .then(() => {

                setSuccess(true);
                setTimeout(function () {
                    setSuccess(false);
                }, 6000);
            }, () => {
                // console.log(error.text);
                setError(true)
                setTimeout(function () {
                    setError(false);
                }, 10000);
            });

    }

    const formik = useFormik({
        initialValues: {
            email: '',
            userName: '',
            textarea: ''
        },
        validate: (values) => {

            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.userName) {
                errors.userName = 'Required';
            } else if (values.userName.length < 3) {
                errors.userName = 'Your name must be 3 characters or more'

            } else if (values.textarea.length < 3) {
                errors.textarea = 'Required';
            }
            return errors;

        },
        onSubmit: (values) => {
            if (values.email !== '' && values.userName !== '' && values.textarea !== '') {
                sendEmail()
                formik.resetForm();
            }
        },
    })




    return (

        <div id='contact' className={s.contactsBlock}>

            <div className={`${styleContainer.container} ${s.contacts}`}>
                <Title text={'Contact'}/>
                <Zoom clear>
                    <form ref={formRef} onSubmit={formik.handleSubmit} className={s.form}>
                        <input type="text" className={s.input}
                               placeholder={'Name'}
                               name='to_name'
                               {...formik.getFieldProps('userName')}
                        />
                        {formik.touched.userName && formik.errors.userName &&
                        <div style={{'color': 'red'}}>{formik.errors.userName}</div>}

                        <input type="email" className={s.input}
                               placeholder={'E-mail'}
                               name='from_name'

                               {...formik.getFieldProps('email')}
                        />
                        <div>

                        </div>
                        {formik.touched.email && formik.errors.email &&
                        <div style={{'color': 'red'}}>{formik.errors.email}</div>}

                        <textarea

                            placeholder={'Enter your question'}
                            name='message'
                            {...formik.getFieldProps('textarea')}
                        />
                        {formik.touched.textarea && formik.errors.textarea &&
                        <div style={{'color': 'red'}}>{formik.errors.textarea}</div>}
                        <div>
                            {success ? <p className={s.sendMessage}>Your message is submit </p> : ''}
                            {error ? <p style={{'color': 'red'}}>Sorry, there was an error sending</p> : ''}
                        </div>
                        <button type="submit"
                                className={styleContainer.button}

                        ><span className={styleContainer.descriptionBtn}>Send message</span>
                        </button>
                    </form>
                </Zoom>
            </div>
        </div>

    )
}


export default Contacts;