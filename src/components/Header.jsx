import React from 'react';

const Header = ({ logo }) => (
    <header className="flex items-center justify-between px-2 md:px-6 py-2">
        <img src={logo} alt="Logo of the company" className="w-10 md:w-12" loading="lazy" />
        <nav className="hidden md:flex space-x-12 lg:space-x-20 text-gray-300 uppercase">
            {['Headphone', 'Earphone', 'Wireless', 'Support'].map((item) => (
                <a key={item} href="#" className="hover:text-white">
                    {item}
                </a>
            ))}
        </nav>
        <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none" aria-label="Open menu">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>
);

export default Header;
