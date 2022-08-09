import React from 'react';
import { NavigationDots, SocialMedia } from '../components/';

const appWrap = (Components, idName, classNames) =>
    function HOC() {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />

                <div className='app__wrapper app__flex'>
                    <Components />

                    <div className='copyright'>
                        <p className='p-text'>@2022 <a href="https://github.com/barel31/">/barel31</a></p>
                        <p className='p-text'>made with JSM</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

export default appWrap;
