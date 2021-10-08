import React from 'react';
import {Container} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <header className="header">
            <Container className="d-flex justify-content-between">
                <a href="/" className="header-logo"><img src={Logo} alt="logo" /></a>
                <a href="/" className="btn btn-outline-white">WHITEPAPER</a>
            </Container>
        </header>
    );
}

export default Header;