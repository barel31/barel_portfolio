import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const reverseCircle = (img) => {
	if (img === images.mongo || img === images.next || img === images.express) {
		return true;
	}

	return false;
};

const Header = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info">
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text">Barel Shraga</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Full Stack Developer</p>
						<p className="p-text">Looking for my next job!</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img">
				{/* <img src={images.profile} alt='profile_bg' /> */}
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</motion.div>
			<div className="app__header-circles" ref={ref}>
				{[
					images.node,
					images.react,
					images.sass,
					images.python,
					images.flask,
					images.mongo,
					images.next,
					images.express,
					images.redux,
				].map((v, i) => (
					<motion.div
						className={`circle-cmp app__flex ${reverseCircle(v) ? 'circle-cmp-right' : ''}`}
						animate={
							isInView ? { x: [reverseCircle(v) ? -200 : 200, 0], y: [100, 0], opacity: [0, 1] } : {}
						}
						key={`circle-${i}`}>
						<img src={v} alt="circle" />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default AppWrap(Header, 'home');
