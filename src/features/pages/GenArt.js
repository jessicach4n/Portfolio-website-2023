import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Page } from './Page'


export class GenArt extends Page {

    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.GENART_TAGS} />
                <div className="heading">
                    <h1>Weather Art Generator</h1>
                    <a href="https://xd.adobe.com/view/bc64e717-7982-457f-a692-a429f51572c8-e937/"
                        target='_blank' rel="noreferrer" className="decorated-link">
                        Adobe XD prototype
                    </a>
                </div>
                <img width="1500px" height='890px' src="assets/genart-mockup.jpg"
                    alt="Multiple pages appearing on the Weather Art Generator website." />
                <h2>The project</h2>
                <div className="two-columns">
                    <p>
                        The Weather Art Generator creates art from a set of data that,
                        in the desire to connect with viewers, comes from an intelligible
                        source present in all our lives, the weather.
                    </p>
                    <p>
                        The parameters of the animations are defined by the API used which provides us with weather data for 
                        the next five days every three hours. We take the first set of weather data provided as well as those twelve 
                        and twenty-four hours later in order to keep three choices of data subcategories obtained by the API. Then, 
                        based on internal calculations, we determine which choice we use.
                    </p>
                    <p>
                        In the current state of the project, we used atmospheric pressure at sea level in hectopascals (hPA). We have normalized
                        this measurement between 0 and 1 with a lower and upper bounds. The lower bound is 870 hPA the lowest
                        measurement found on Earth, found in tornadoes and tropical cyclones. The upper bound is 1085 hPA, round-up
                        of the highest measurement on Earth of 1083.8 hPA, recorded in Russia in 1961.
                    </p>
                    <p>
                        We manipulate this result to influence a feature of each currently available animation: the cycle of the number 
                        of members in the B??zier curve animation, the number of rotating lines in the cylindrical animation and the chance 
                        of mutation in the polygon animation.
                    </p>
                    <p>
                        This project has been realized with a strong focus on abstraction and great care of the software architecture. 
                        Thus, the internal mechanics of the website are highly modular and allow the implementation of additional features 
                        easily. A project of this magnitude can take years to develop in order to perfect it. With the short fifteen-week 
                        development period, we chose to work mainly on the logic engine of the website.  We are proud to present this first 
                        iteration of the Weather Art Generator.
                    </p>
                </div>
                <h3>Materials</h3>
                <p>This web project was developped with Javascript, ReactJS, P5, PHP and PostgreSQL in the context of a school project..</p>
                <a href="https://github.com/jessicach4n/ProjetSynthese_A2022" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <h3>Design document</h3>
                <a href="assets/DesignDocument.pdf" className="doc" target="_blank" rel="noreferrer">View here</a>
                <h3>In collaboration with</h3>
                <p>Sebastian Perez</p>
                <h2>Video</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aztXTNB8xCc" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </section>
        );
    }
}