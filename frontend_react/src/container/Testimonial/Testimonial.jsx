import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
    // const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        client.fetch(query).then((data) => setTestimonials(data));

        // const brandsQuery = '*[_type == "brands"]';
        // client.fetch(brandsQuery).then((data) => setBrands(data));
    }, []);

    return (
        <>
            {testimonials.length && (
                <>
                    <div className='app__testimonial-item app__flex'>
                        <img src={urlFor(testimonials[currentIndex].imgurl)} alt='testimonials' />
                        <div className='app__testimonial-content'>
                            <p className='p-text'>{testimonials[currentIndex].feedback}</p>
                            <div>
                                <h4 className='bold-text'>{testimonials[currentIndex].name}</h4>
                                <h5 className='p-text'>{testimonials[currentIndex].company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className='app__testimonial-btns app__flex'>
                        <div
                            className='app__flex'
                            onClick={() =>
                                setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
                            }>
                            <HiChevronLeft />
                        </div>
                        <div
                            className='app__flex'
                            onClick={() =>
                                setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
                            }>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
            
            {/*? No Experience yet. */}
            
            {/* <div className='app__testimonial-brands app__flex'>
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}>
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div> */}
        </>
    );
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonials', 'app__primarybg');
