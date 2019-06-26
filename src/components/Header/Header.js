import React from 'react';
import Logo from '../../images/logo.png';

export default function Header() {
    return (
        <nav className="nav-header">
            <img src={Logo} />
        </nav>
    )
}