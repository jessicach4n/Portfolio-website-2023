import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export class Contact extends Component {

    render() {
        return (
            <section id="section-contact">
                <div className="heading">
                    <Title titlename="Contact me" />
                </div>
                <div className="contact-content">
                    <p>Interested in working together? I'd be delighted to discuss the details—feel free to contact me!</p>
                    <a href="mailto:j_chan20@live.concordia.ca">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/jessica-chan-graphics/" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </section>
        );
    }
}