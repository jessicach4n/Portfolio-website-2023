import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { Link } from "react-router-dom";
import { Page } from "./Page";


export class RadishParty extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.RADISH_TAGS} />
                <div className="heading">
                    <h1>Radish Party</h1>
                    <Link to={'/play-radish-party'}>
                        <button className="decorated-link">Play online</button>
                    </Link>
                </div>
                <img width="1200px" height='800px' src="assets/radish-mockup.jpg"
                    alt="Multiple scenes from the game displayed on a computer monitor." />
                <h2>The project</h2>
                <div className="two-columns">
                    <p>
                        In the single-player platformer Radish Party, the player must collect all five pies on
                        the map to assist Mr. Radish in getting to the portals that are blocked by a bright
                        ray that emerges from a bottle. In order to survive the game, the player must evade their deadly foe,
                        Mr. Bunny, and his carrot projectiles.
                    </p>
                </div>
                <h3>Materials</h3>
                <p>This game was developped with Unity and C#.</p>
                <h3>Assets from Unity Asset Store</h3>
                <p>Pixel Adventure 1 & 2 - Pixel Frog</p>
                <p>Free Pixel Food - Henry Software</p>
                <p>Cartoon FX Remaster Free - Jean Moreno</p>
                <p>Volumetric Lines - Johannes Unterguggenberger</p>
                <h3>In collaboration with</h3>
                <p>Sebastian Perez</p>
                <h2>Video</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/luruY0DMh_M" title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            </section>
        );
    }
}