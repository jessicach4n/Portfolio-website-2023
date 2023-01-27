import React, { Component } from "react";
import '../../css/header.css'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

export class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleScrollToProjects = this.handleScrollToProjects.bind(this);
    }

    handleScrollToProjects() {
        console.log('yo');
        const section = document.getElementById('section-projects');
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
                        <button>About me</button>
                    </li>
                    <li>
                        <button>Contact me</button>
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
                    </ul>
                    <ul>
                        <li>                            
                            <a href="https://github.com/jessicach4n" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="lg"/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/jessechan.graphics/" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                        </li>
                    </ul>  
                </aside>
            <Outlet />
            </>
            
        );
    }
}

