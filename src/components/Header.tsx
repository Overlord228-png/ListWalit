import React from 'react';
import { useSidebar } from './SidebarContext';

const Header: React.FC = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <header className="bg-gray-800/30 bg-opacity-75 backdrop-filter backdrop-blur-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto py-4">
                <h1 className="text-2xl font-bold text-center text-blue">Конвертер валют</h1>
            </div>
            <button onClick={toggleSidebar} className="text-white focus:outline-none absolute top-0 right-0 m-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </header>
    );
};

export default Header;
