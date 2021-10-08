import React from 'react';
import {Container} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';
import Reddit from '../assets/images/reddit-icon.svg';
import Telegram from '../assets/images/telegram-icon.svg';
import Micon from '../assets/images/m-icon.svg';
import Github from '../assets/images/github-icon.svg';
import Gitbook from '../assets/images/gitbook-icon-1.svg';

function Footer() {
    return (
        <div className="footer text-center">
            <Container>
                <img src={Logo} alt="logo" data-aos="fade-up" />
                <div className="social-media d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <a href="/"><img src={Reddit} alt="icon" /></a>
                    <a href="/"><img src={Telegram} alt="icon" /></a>
                    <a href="/"><img src={Micon} alt="icon" /></a>
                    <a href="/"><img src={Github} alt="icon" /></a>
                    <a href="/"><img src={Gitbook} alt="icon" /></a>
                </div>
                <p className="copyright">
                    Copyright © 2021 Black
                </p>
            </Container>
        </div>
    );
}

export default Footer;