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
                            I learned the fundamentals of web design during my three years of study in graphic design. 
                            After graduation, I made the decision to continue along this route and enrolled in a rigorous 
                            one and a half year programme in computer science technology, where I gained knowledge and 
                            abilities that went beyond the Web. I learned a variety of programming languages and techniques 
                            from this training.     
                        </p>
                        <p>
                            Today, I'd like to learn more about React, experiment with React Native, understand Three.js, 
                            and dive into the field of UX/UI design.
                        </p>
                    </div>
                    <img src="assets/aboutme.jpg" width="1000px" height="1412px" alt="My reflection on colorful glass art display during winter."/>
                </div>




            </section>
        );
    }
}