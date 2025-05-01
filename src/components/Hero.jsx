import React from 'react';
import bgImage from '../images/bg.png';

const specs = [
    { label: 'Charging capacity', value: '100mAh' },
    { label: 'Playback Time in Hrs', value: '16 Hours' },
    { label: 'Talking Time in Hrs', value: '16 Hours' },
];

const Hero = () => (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-4 py-2 gap-4 md:gap-0">
        {/* Left section */}
        <div className="md:w-1/2 text-center md:text-left space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
                Bass Headset V2.0
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-300">
                Pure rich bass headset with 100% pure bass sound.
            </p>
            <p className="text-gray-300 text-sm md:text-base">
                Experience sound like never before with the Bass Headset V2.0 – the perfect
                companion for music lovers, gamers, and audiophiles alike. Engineered to
                deliver deep, resonant bass and crystal-clear highs, this headset brings your
                favorite tracks, movies, and games to life with exceptional sound quality.
            </p>

            {/* Specs */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start md:space-x-10 lg:space-x-18 mt-4">
                {specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-sm">{spec.label}</span>
                        <span className="border border-gray-300 rounded-full py-1 px-4 text-sm">
              {spec.value}
            </span>
                    </div>
                ))}
            </div>

            {/* Price & CTA */}
            <div className="mt-4">
                <p className="text-base font-bold">
                    Price:
                    <span className="text-lg line-through text-gray-400 ml-2">$180</span>
                    <span className="text-2xl text-white ml-2">$120</span>
                </p>
                <button className="mt-4 w-full md:w-1/3 max-w-xs bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-400 transition duration-300 ease-in-out">
                    Add to cart
                </button>
            </div>
        </div>

        {/* Right section with animated image */}
        <div className="md:w-1/2 flex justify-center relative">
            <img
                src={bgImage}
                alt="Headset"
                className="w-4/5 md:w-full md:mt-4 transform transition duration-500 ease-in-out animation-heartbeat"
            />
        </div>
    </section>
);

export default Hero;
