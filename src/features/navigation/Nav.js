import React, { Component } from "react";
import '../../css/header.css'
import { Outlet, Link } from "react-router-dom";

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
            <Outlet />
            </>
            
        );
    }
}

