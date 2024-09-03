import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'

export class VideoEditing extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.VIDEO_TAGS} />
                <div className="heading">
                    <h1>Video Editing Projects</h1>
                </div>
                <article>
                    <h2>The City and Body</h2>
                    <p>
                        The City and Body is a video collage that explores the relationship between the city and the body.Using self-recorded footage of the city of Montreal and the people in it, as well as sound samples 
                        from the city, the video aims to create a connection between the two entities.
                    </p>
                    <h3>Materials</h3>
                    <p>This project was developped with Premiere Pro, AfterEffects and Audition in the context of a school project.</p>
                    <h3>Video</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fPhIKiVqBrw?si=WWUi_d0XPRGsRnYt" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </article>
                <article>
                    <h2>The New Normal</h2>
                    <p>
                        The New Normal is a video inspired by the atmosphere of apocalyptic thrillers, highlighting the gradual fading of human connection as a result of isolation and the monotonous routine of staying indoors, constantly in front of a computer. 
                        With props and photography, the video aims to create a sense of unease and discomfort.
                    </p>
                    <h3>Materials</h3>
                    <p>This project was developped with Premiere Pro, AfterEffects and Audition in the context of a school project.</p>
                    <h3>Video</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wbkqr8Q5z_c?si=-QjtUnuzbPxyB81U" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </article>
            </section>
        );
    }
}