import React, { Component } from "react";
import '../../css/projects.css'
import RadishMockup from "../../assets/radish-mockup.jpg"

export class RadishParty extends Component {

    render() {
        return (
            <section className="content">
                <div className="heading">
                    <h1>Radish Party</h1>
                    <a href="" target='_blank' ref="noreferrer">Play online</a>
                </div>
                <img width="1200px" height='800px' src={RadishMockup} 
                alt="Multiple pages appearing on the Weather Art Generator website."/>
                <h2>The project</h2>
                <div className="two-columns">
                    <p>
                        Radish Party is a single player platformer...
                    </p>
                </div>
                <h3>Materials</h3>
                <p>This game was developped with Unity and C#.</p>
                <h3>Assets from Unity Asset Store</h3>
                <p>Pixel Adventure 1 & 2 - Pixel Frog</p>
                <p>Free Pixel Food - Henry Software</p>
                <p>Cartoon FX Remaster Free - Jean Moreno</p>
                <p>Volumetric Lines - Johannes Unterguggenberger</p>
                <h3>By</h3>
                <p>Jessica Chan</p>
                <p>Sebastian Perez</p>

                <video src=""></video>
    
                
            </section>
        );
    }
}