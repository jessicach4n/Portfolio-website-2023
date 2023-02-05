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
                <div className="flex-content about-content">
                    <div>
                        <p>
                            I studied in Graphic Design for 3 years during which I learned the basics of web design.
                            When graduation came along, I decided I wanted to persue this path by signing up for an intensive
                            year and a half program in Computer Science Technology where I developped skills beyond the boudaries
                            of Web. This program has taught me multiple programming languages as well as many different practices.
                            The taste of what I had discovered in this second program has led me to want more and look for higher eduation.
                        </p>
                        <p>
                            I am still as fond of web as when I was just a graphic design student, but now have a much better idea of what
                            I want to do and the possibilities out there.
                        </p>
                        <p>
                            I am interested in learning more about React, trying out React Native, learning Three.js as well as tackle the
                            world of UX/UI design.
                        </p>
                    </div>
                    <img src="assets/aboutme.jpg" width="1000px" height="1412px" alt="My reflection on colorful glass art display during winter."/>
                </div>




            </section>
        );
    }
}