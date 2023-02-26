import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'

export class Typomanie extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.TYPOMANIE_TAGS} />
                <div className="heading">
                    <h1>Typomania App Prototype</h1>
                    <a href="https://xd.adobe.com/view/0736f4fa-9613-4a98-b6ab-17eeb820c5ee-5265/?hints=off"
                            target='_blank' rel="noreferrer" className="decorated-link">
                            Play online
                    </a>
                </div>
                <div className="two-column">
                    <img src="assets/typomanie1.jpg" alt="Multiple screens from the game."></img>
                    <img src="assets/typomanie2.jpg" alt="Two screens from the game."></img>
                </div>
                <h2>The project</h2>
                <div className="two-columns">
                    <p>
                        The role of this mobile application is to diagnose the user with typomania,  
                        the fictitious syndrome of a graphic designer possessed by a fixation on typography. 
                    </p>
                    <p>
                        Moreover, the game is designed to frustrate the user by inducing the effects  of typomania 
                        such as frustration and anger. While the player doesn’t admit  that they are suffering from the syndrome, 
                        the game will restart from the  beginning. 
                    </p>
                    <p>
                        To further push the impression that the application is playing against the user, 
                        the game is designed to glitch a few times by simulating the appearance of corrupted 
                        pixels every 0.2 second.
                    </p>
                </div>
                <h3>Materials</h3>
                <p>This project was developped with Adobe XD and Illustrator in the context of a school project.</p>
                
            </section>
        );
    }
}