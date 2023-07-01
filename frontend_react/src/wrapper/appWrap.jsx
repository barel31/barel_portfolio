import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const currentYear = new Date().getFullYear();

const appWrap = (Components, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />

				<div className="app__wrapper app__flex">
					<Components />

					<div className="copyright">
						<p className="p-text">
							@{currentYear}{' '}
							<a href="https://github.com/barel31/">/barel31</a>
						</p>
						<p className="p-text">all right reserved</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default appWrap;
