import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'

export class Newcastle extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.NEWCASTLE_TAGS} />
                <h1>Newcastle Brown Ale Packaging</h1>

                <div className="three-column">
                    <img src="assets/newcastle1.jpg" alt="Newcastle beer bottles."></img>
                    <img src="assets/newcastle2.jpg" alt="Newcastle beer bottles."></img>
                    <img src="assets/newcastle3.jpg" alt="Newcastle beer bottles."></img>
                </div>

                <h2>The project</h2>
                <div>
                    <p>
                        In this commercial packaging project, a new visual identity is created for a select alcoholic beverage
                        bottle in the context of a school project.
                    </p>
                    <p>
                        I redesigned the Newcastle beer brand to modernize the visual style of the label without straying too far
                        from the original brand image. By preserving some aspects of the original design, customers will still be
                        able to recognize their favorite beer on the market shelves.
                    </p>

                </div>
                <h3>Materials</h3>
                <p>This project was developped with Illustrator and Photoshop in the context of a school project.</p>
                
            </section>
        );
    }
}