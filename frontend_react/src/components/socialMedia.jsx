import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function socialMedia() {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter />
            </div>
            <div>
                <FaFacebookF />
            </div>
            <div>
                <BsInstagram />
            </div>
        </div>
    );
}

export default socialMedia;
