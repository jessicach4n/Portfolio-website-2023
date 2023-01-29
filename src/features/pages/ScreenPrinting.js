import React, { Component } from "react";
import '../../css/projects.css'

export class ScreenPrinting extends Component {

    render() {
        return (
            <section className="content">
                <div className="heading">
                    <h1>Exhibition poster</h1>
                </div>
                <h2>The project</h2>
                <div>
                    <p>
                        This poster announces the exhibition of the Cégep du Vieux Montréal 
                        graphic design graduates in Winter 2021.
                    </p>
                </div>
                
                <div className="heading">
                    <h1>Atelier Denis Malo</h1>
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

                <div className="heading">
                    <h1>A zine of classical portraits</h1>
                </div>
                <h2>The project</h2>
                <div>
                    <p>
                        Classic portraits such as The Girl with the Pearl by Johannes Vermeer, American Gothic by Grant Wood, 
                        The Desperate by Gustave Courbet and The Self-Portrait with the Straw Hat by Vincent Van Gogh inspired 
                        this reimagined collection of these works, adapted into illustrations and where the subjects are 
                        replaced by animals
                    </p>
                </div>     

                <video src=""></video>
    
                
            </section>
        );
    }
}