import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
import { urlFor, client } from '../../client';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => setAbouts(data));
    }, []);

    return (
        <>
            <h2 className='head-text'>
                I know that <span>Good Dev</span> <br /> means <span>Good Business</span>
            </h2>

            <div className='app__profiles'>
                {abouts.map((v, i) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profiles-item'
                        key={v.title + i}>
                        <img src={urlFor(v.imgUrl)} alt={v.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>
                            {v.title}
                        </h2>
                        <p className='p-text' style={{ marginTop: 10 }}>
                            {v.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(About, 'about');
