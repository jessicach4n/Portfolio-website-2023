import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";

export class About extends Component {

    render() {
        return (
            <section id="section-about">
                <div className="heading">
                    <Title titlename="A bit about me" />
                </div>
                <div className="flex-content about-content">
                    <div>
                        <p>
                            I learned web design during my three years of study in graphic design which opened my eyes to computer programming. 
                            After graduation, I made the decision to continue along this route and enrolled in a rigorous 
                            one and a half year program in computer science technology, where I gained knowledge and 
                            abilities that went beyond the Web. I learned a variety of programming languages and techniques 
                            from this training.     
                        </p>
                        <p>
                            Today, I want to experiment more with React, learn about interactive design, work with Three.js, 
                            do 3D modeling and dive into the field of UX/UI design. I found the perfect place to do this at Concordia University, 
                            where I am currently pursuing a Bachelor of Computer Science in a Joint Mjor with Computation Arts.
                        </p>
                        <p>
                            In my spare time, I love exploring new restaurants, but I also enjoy the process of cooking at home. 
                            When inspiration hits, I also like to draw and share my illustrations on my Instagram.  
                        </p>
                        <p>
                            I am a curious person who loves to learn and discover new things. I am always looking for new challenges 
                            and opportunities to grow. I am passionate about technology and design, and I am always looking for ways to 
                            combine the two to create something unique.
                        </p>
                        <p>
                            Thank you for taking an interest in me&#8201;!
                        </p>
                    </div>
                    <img src="assets/aboutme.jpg" width="1000px" height="1412px" alt="My reflection on colorful glass art display during winter."/>
                </div>
            </section>
        );
    }
}