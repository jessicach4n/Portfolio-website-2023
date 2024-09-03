import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export class Contact extends Component {

    render() {
        return (
            <section id="section-contact">
                <div className="heading">
                    <Title titlename="Contact me" />
                </div>
                <div className="contact-content">
                    <a href="mailto:jessicachan.graphicdesign@gmail.com.">jessicachan.graphicdesign@gmail.com</a>
                    <br />
                    <a className="linkedin" href="https://www.linkedin.com/in/jessica-chan-graphics/" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </section>
        );
    }
}