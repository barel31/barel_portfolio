import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        client.fetch(query).then((data) => setExperience(data));

        const skillsQuery = '*[_type == "skills"]';
        client.fetch(skillsQuery).then((data) => setSkills(data));
    }, []);

    return (
        <>
            <h2 className='head-text'>Skills & Experience</h2>

            <div className='app__skills-container'>
                <motion.div className='app__skills-list'>
                    {skills?.map((v) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='app__skills-item app__flex'
                            key={v.name}>
                            <div className='app__flex' style={{ backgroundColor: v.bgColor }}>
                                <img src={urlFor(v.icon)} alt={v.name} />
                            </div>
                            <p className='p-text'>{v.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className='app__skills-exp'>
                    {experience?.map((experience) => (
                        <>
                            <motion.div className='app__skills-exp-item' key={experience.year}>
                                <div className='app__skills-exp-year'>
                                    <p className='p-text'>{experience.year}</p>
                                </div>
                                <motion.div className='app__skills-exp-works'>
                                    {experience.works.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{ opacity: [0, 1] }}
                                                transition={{ duration: 0.5 }}
                                                className='app__skills-exp-work'
                                                data-tip
                                                data-for={work.name}
                                                key={work.name}>
                                                <h4 className='bold-text'>{work.name}</h4>
                                                <p className='p-text'>{work.company}</p>
                                            </motion.div>
                                            <Tooltip
                                                id={work.name}
                                                effect='solid'
                                                arrowColor='#fff'
                                                className='skills-tooltip'>
                                                {work.desc}
                                            </Tooltip>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                            <Tooltip id={experience.name} effect='solid' arrowColor='#fff' className='skills-tooltip'>
                                {experience.desc}
                            </Tooltip>
                        </>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
