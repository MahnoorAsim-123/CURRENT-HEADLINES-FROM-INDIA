import React from 'react';
import Logo from "./assets/logo.png";

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="navLinks">
                    <ul>
                        <li>Home</li>
                        <li>Entertainment</li>
                        <li>Business</li>
                        <li>Travel</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}