import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";

export class About extends Component {

    render() {
        return (
            <section id="section-about">
                <div className="heading">
                    <Title titlename="About me" />
                </div>
                <h2>My education</h2>
                <p></p>
                <h2>My experience</h2>
                <p></p>
                <h2>My plans</h2>
                <p></p>

            </section>
        );
    }
}