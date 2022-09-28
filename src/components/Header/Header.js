import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Country Names Flags and more!!</h1>
            <nav className='menu py-3'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;