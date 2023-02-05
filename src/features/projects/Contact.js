import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";

export class Contact extends Component {

    render() {
        return (
            <section id="section-contact">
                <div className="heading">
                    <Title titlename="Contact me" />
                </div>
                <div className="contact-content">
                    <p>If you would like to discuss about future projects, feel free to contact me through the following email address :</p>
                    <a href="mailto:jessicachan.graphicdesign@gmail.com.">jessicachan.graphicdesign@gmail.com</a>
                </div>
            </section>
        );
    }
}