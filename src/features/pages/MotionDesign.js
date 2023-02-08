import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'

export class MotionDesign extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.MOTION_TAGS} />
                <div className="heading">
                    <h1>Employee or self-employed ?</h1>
                </div>
                <h2>The project</h2>
                <p>
                This project consists of designing an animation that supports the narrator
                and illustrates different ideas to facilitate understanding.
                </p>
                <h3>Materials</h3>
                <p>This project was developped with AfterEffects and Illustrator in the context of a school project.</p>
                <h3>Attributions</h3>
                <p><a className="doc" href="https://urbania.ca/" target='_blank' rel="noreferrer">Urbania</a> and <a className="doc" target='_blank' rel="noreferrer" href="https://www.fondsftq.com/">Fonds de solidarité FTQ</a></p>
                <h2>Video</h2>
                <video className="media" src="assets/motion-design.mp4" poster="assets/motion-design-poster.jpg" width="1000px" height="auto" controls></video>
            </section>
        );
    }
}