import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import '../../css/home.css'

export class Home extends Component {

    render() {
        return (
            <div className="home">
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
                <div className="home-texts">
                    <p className="work-title">Graphic designer | Web developper | Illustrator</p>
                    <h1>Hey there, I’m Jessica!</h1>
                </div>
            </div>
        );
    }
}

