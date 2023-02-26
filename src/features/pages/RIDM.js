import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'

export class RIDM extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.RIDM_TAGS} />
                <h1>Montreal International Documentary Festival</h1>
                <img src="assets/RIDM-1.jpg" alt="Poster of RIDM 2021 festival."></img>
                <div className="two-column">
                    <img src="assets/RIDM-2.jpg" alt="Pamphlet of RIDM 2021 festival."></img>
                    <img src="assets/RIDM-3.jpg" alt="Invitation card of RIDM 2021 festival."></img>
                </div>

                <h2>The project</h2>
                <div className="two-columns">
                    <p>
                    For this advertising project, I designed the visual identity of the Montreal International 
                    Documentary Festival for its 24th edition in 2021. Following a real meeting with the 
                    organization's managers, it was agreed that the visual should show the themes of 
                    togetherness and community, which are values at the heart of the organization.
                    </p>
                    <p>
                    The chosen concept illustrates elongated arms intertwined with each other and holding each 
                    other by the elbows to symbolize, among other things, the guests and their interactions during 
                    the gathering.
                    </p>
                </div>
                <h3>Materials</h3>
                <p>This project was developped with Adobe Fresco, Illustrator, InDesign and Photoshop in the context of a school project.</p>
                <h3>Attributions</h3>
                <a href="https://ridm.ca/en" className="doc" target='_blank' rel="noreferrer">Montreal International Documentary Festival</a>
                <h3>Sketches</h3>
                <div className="two-column">
                    <img src="assets/RIDM-4.jpg" alt="Poster sketches of RIDM 2021 festival."></img>
                    <img src="assets/RIDM-5.jpg" alt="Poster sketches of RIDM 2021 festival."></img>
                </div>
                
            </section>
        );
    }
}