import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'

export class MediaSolutions extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.SOLUTION_MEDIA_TAGS} />
                <h1>Media Solutions</h1>
                <div className="two-column">
                    <img width="1200px" height='800px' src="assets/solutionmedia1.jpg"
                        alt="Multiple screen of the application." />
                    <img width="1200px" height='800px' src="assets/solutionmedia2.jpg"
                        alt="Application wireframe." />
                </div>

                <h2>The project</h2>
                <p>
                    In this project, I created a short animation of Media Solutions' brand identity that
                    reflects their brand's identity. This animation is designed to be played at the
                    beginning of any presentation such as events, customer meetings, promos, etc.
                </p>
                <p>
                    In addition, a web application presenting some of the organization’s projects was
                    made along with the animation. This prototype remains consistent with the DNA
                    of the brand.
                </p>
                <h3>Materials</h3>
                <p>This project was developped with Adobe XD, AfterEffects and Illustrator in the context of a school project.</p>
                <h3>Attributions</h3>
                <a href="https://solutionsmedia.cbcrc.ca/" className="doc">Media Solutions</a>
                <h2>Video</h2>
                <video className="media" src="assets/solutionmedia.mp4" poster="assets/solutionmedia-poster.jpg" width="1000px" height="auto" controls></video>
            </section>
        );
    }
}