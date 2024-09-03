import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { Link } from "react-router-dom";
import { Page } from "./Page";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export class GameforSeniors extends Page {
    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.SENIORS_TAGS} />
                <div className="heading">
                    <h1>Interactive Game Engaging Senior Care Patients</h1>
                    <a href="/game4seniors" className="decorated-link">Play online</a>
                </div>
                <img width="800px" height='600px' src="assets/seniors4.jpg"
                    alt="User testing at Montreal Chinese Hospital." />
                <h2>The project</h2>
                <p>
                    In the context of the course "Interdisciplinarity across the Fine Arts" at the University of Concordia, I developped this project that
                    creates an interactive game to engage dementia and Alzheimer's senior patients in CHSLDs with low autonomy. This first iteration consists 
                    of one simple game that combines interactivity, engaging visuals, motions and sounds. The concept was carefully thought out to necessitate 
                    minimal comprehension effort on the part of the player and to focus on keeping them engaged. The simple characteristics of the game enable senior 
                    patients to entertain themselves indefinitely while in the care of healthcare workers. 
                </p>
                <p>
                    The project is focused on the Montreal Chinese Hospital, a CHSLD situated on the outskirts of Chinatown on Viger Street.
                </p>
                <div className="two-column">
                    <img width="1200px" height='800px' src="assets/seniors2.jpg"
                        alt="Game interface." />
                    <img width="1200px" height='800px' src="assets/seniors.jpg"
                        alt="Game interface." />
                </div>
                <h3>Materials</h3>
                <p>This game was developped with HTML, CSS and Javascript. </p>
                <a href="https://github.com/jessicach4n/TapGameForSeniors" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <h3>Assets</h3>
                <p>Created in Illustrator and Photoshop.</p>
                <h3>Project Presentation Document</h3>
                <a href="assets/seniors_ProjectPresentation.pdf" className="doc" target='_blank' rel="noreferrer">View here</a>

            </section>
        )
    }
}