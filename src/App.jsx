import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialIcons from './components/SocialIcons';

import bgImage from './images/bg.png';
import boutImage from './images/boat_logo.png';
import facebookImg from './images/facebook_logo.png';
import instagramImg from './images/instagram_logo.png';
import twitterImg from './images/twitter_logo.png';

const socialIcons = [
    { src: facebookImg, alt: 'Facebook' },
    { src: instagramImg, alt: 'Instagram' },
    { src: twitterImg, alt: 'Twitter' },
];

function App() {
    return (
        <div className="w-full min-h-screen font-sans text-white bg-gradient-to-r from-black to-red-900">
            <div className="relative w-full h-full overflow-hidden p-2">
                <div
                    className="absolute inset-0 bg-no-repeat opacity-20"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundPosition: '-100px center',
                        backgroundSize: '900px',
                    }}
                />
                <div className="absolute inset-0 bg-red-800 opacity-20" />

                <div className="relative z-10">
                    <Header logo={boutImage} />
                    <Hero />
                    <SocialIcons icons={socialIcons} />
                </div>
            </div>
        </div>
    );
}

export default App;
