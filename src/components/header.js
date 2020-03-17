import React from 'react';
import './headerStyle.css';
export const Header = (props) => {
    return (
        <header>
                <div className="logo">
                    <img src='https://www.pngkey.com/png/full/183-1836577_oasis-palms-rv-resort-rv-resort-logo.png' alt='Not Found' />
                </div>
                <div className='nav_bar'>
                    <ul className='d-flex'>
                        <li>Rooms</li>
                        <li>Packeges</li>
                        <li>Wedding</li>
                        <li>Bhagvat</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>
        </header>
    )
}