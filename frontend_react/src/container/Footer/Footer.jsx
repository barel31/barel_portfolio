import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email,
            message,
        };

        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        });
    };

    return (
        <>
            <h2 className='head-text'>Take a coffe & chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email' />
                    <a href='mailto:barel123133@gmail.com' className='p-text'>
                        Barel123133@gmail.com
                    </a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='mobile' />
                    <a href='tel: +972 (52) 544-4634' className='p-text'>
                        +972 (52) 544-4634
                    </a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='email'
                            placeholder='Your Email'
                            name='email'
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            value={message}
                            name='message'
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type='button' className='p-text' onClick={handleSubmit}>
                        {loading ? 'Sending' : 'Send Message'}
                    </button>
                </div>
            ) : (
                <div className='head-text'>Thank you for getting in touch</div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
