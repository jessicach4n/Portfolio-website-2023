import React, { Component } from "react";
import '../../css/header.css'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram, faBehance} from '@fortawesome/free-brands-svg-icons'

export class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleScrollToProjects = this.handleScrollToProjects.bind(this);
    }

    handleScrollToProjects() {
        const section = document.getElementById('section-projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleScrollToAbout() {
        const section = document.getElementById('section-about');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleScrollToContact() {
        const section = document.getElementById('section-contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        return (
            <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <button onClick={this.handleScrollToProjects}>My projects</button>
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/stylo.mangue/" target="_blank" rel="noreferrer">Illustrations</a>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <button onClick={this.handleScrollToAbout}>About me</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <button onClick={this.handleScrollToContact}>Contact me</button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <aside>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/jessica-chan-graphics/" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                            </a>
                        </li>
                        <li>                            
                            <a href="https://github.com/jessicach4n" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="lg"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jessechan.graphics/" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/jessicachan5" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faBehance} size="lg"/>
                            </a>
                        </li>
                    </ul>
                </aside>
            <Outlet />
            </>
            
        );
    }
}

