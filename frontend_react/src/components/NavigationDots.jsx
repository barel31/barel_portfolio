import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

function NavigationDots({ active }) {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((v, i) => (
                <a
                    href={`#${v}`}
                    key={v + i}
                    className='app__navigation-dot'
                    style={active === v ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    );
}

export default NavigationDots;
