import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { Page } from "./Page";

export class ScreenPrinting extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.SCREENPRINTING_TAGS}/>
                <article>
                    <h1>Exhibition poster</h1>
                    <div className="three-column">
                        <img src="assets/expo1.jpg" alt="Poster of a colorful monster wearing a graduation hat drooling over coffee."></img>
                        <img src="assets/expo2.jpg" alt="Colorful monster illustration close-up"></img>
                        <img src="assets/expo3.jpg" alt="Close-up of the texts"></img>
                    </div>
                    <h2>The project</h2>
                    <div>
                        <p>
                            This poster announces the exhibition of the Cégep du Vieux Montréal 
                            graphic design graduates in Winter 2021.
                        </p>
                    </div>
                </article>
                
                <Tags tags={myConstants.SCREENPRINTING_TAGS}/>
                <article>
                    <h1>Atelier Denis Malo</h1>
                    <div className="three-column">
                        <img src="assets/denis-malo1.jpg" alt="Poster with clouds and a dragon wrapped around mountains."></img>
                        <img src="assets/denis-malo2.jpg" alt="Poster with clouds and a dragon wrapped around mountains." ></img>
                        <img src="assets/denis-malo3.jpg" alt="Poster with clouds and a dragon wrapped around mountains."></img>
                        <img src="assets/denis-malo4.jpg" alt="Poster with clouds and a dragon wrapped around mountains."></img>
                        <img src="assets/denis-malo5.jpg" alt="Poster with clouds and a dragon wrapped around mountains."></img>
                        <img src="assets/denis-malo7.jpg" alt="Poster with clouds and a dragon wrapped around mountains."></img>
                    </div>
                    <h2>The project</h2>
                    <div>
                        <p>
                            As part of the screen printing course, this project consisted of designing a 
                            poster promoting the Atelier Denis Malo.
                        </p>
                        <p>
                            Moreover, this poster was voted by the cohort of graphic design students of the 
                            Cégep du Vieux Montréal to be displayed at the entrance of the silkscreen workshop 
                            during the year 2021.
                        </p>
                    </div>
                </article>
                
                <Tags tags={myConstants.SCREENPRINTING_TAGS}/>
                <article>
                    <h1>A zine of classical portraits</h1>
                    <div className="three-column">
                        <img src="assets/zine1.jpg" alt="Content of the zine."></img>
                        <img src="assets/zine2.jpg" alt="Content of the zine."></img>
                        <img src="assets/zine3.jpg" alt="Content of the zine."></img>
                        <img src="assets/zine4.jpg" alt="Content of the zine."></img>
                        <img src="assets/zine5.jpg" alt="Content of the zine."></img>
                        <img src="assets/zine6.jpg" alt="Content of the zine."></img>
                    </div>
                    <h2>The project</h2>
                    <div>
                        <p>
                            Classic portraits such as The Girl with the Pearl by Johannes Vermeer, American Gothic by Grant Wood, 
                            The Desperate by Gustave Courbet and The Self-Portrait with the Straw Hat by Vincent Van Gogh inspired 
                            this reimagined collection of these works, adapted into illustrations and where the subjects are 
                            replaced by animals.
                        </p>
                    </div>  
                </article>
                   
            </section>
        );
    }
}