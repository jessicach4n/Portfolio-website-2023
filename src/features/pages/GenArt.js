import React, { Component } from "react";
import '../../css/projects.css'
import genArtMockup from "../../assets/genart-mockup.jpg"
import DesignDoc from "../../assets/DesignDocument.pdf"
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


export class GenArt extends Component {
    
    render() {
        return (
            <section className="content">
                <Tags tags={myConstants.GENART_TAGS}/>
                <div className="heading">
                    <h1>Weather Art Generator</h1>
                    <a href="https://xd.adobe.com/view/bc64e717-7982-457f-a692-a429f51572c8-e937/" target='_blank' rel="noreferrer">Adobe XD prototype</a>
                </div>
                <img width="1500px" height='890px' src={genArtMockup} 
                alt="Multiple pages appearing on the Weather Art Generator website."/>
                <h2>The project</h2>
                <div className="two-columns">
                    <p>
                        The Weather Art Generator creates art from a set of data that, 
                        in the desire to connect with viewers, comes from an intelligible 
                        source present in all our lives, the weather.
                    </p>
                    <p>
                        The parameters of the animations are defined by the API used which 
                        provides us with weather data for the next five days every three hours. 
                        We take the first set of weather data provided as well as those twelve and 
                        twenty-four hours later in order to keep three choices of data subcategory 
                        obtained by the API. Then, based on internal calculations, 
                        we determine which choice we use.
                    </p>
                    <p>
                        In the current state of the project, we use atmospheric pressure at sea level in hectopascals. 
                        We have normalized this measurement between 0 and 1 with a lower and upper bound. 
                        The lower bound is 870 hPA being the lowest measurement found on Earth, it exists in tornadoes 
                        and tropical cyclones. The upper bound is 1085 hPA, because the highest measurement on Earth 
                        that has been recorded to date is 1083.8 hPA in Russia in 1961. 
                    </p>
                    <p>
                        We manipulate this result to influence a feature of each currently available animation: 
                        the cycle of the number of members in the Bézier curve animation; the number of rotating 
                        lines in the cylindrical animation and a chance of mutation in the polygon animation.  
                    </p>
                    <p>
                        This project has been realized with a strong focus on abstraction and a great care on the 
                        software architecture. Thus, the internal mechanics of the website are highly modular and 
                        allow the implementation of additional features easily. A project of this magnitude can take 
                        years to develop in order to perfect it. With the short fifteen week development period, we chose 
                        to work mainly on the logic engine of the website. We are proud to present this first iteration 
                        of the Weather Art Generator. 
                    </p>
                </div>
                <h3>Materials</h3>
                <p>This web project was developped with ReactJS, P5 and PostgreSQL.</p>
                <a href="https://github.com/jessicach4n/ProjetSynthese_A2022" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                </a>
                <h3>Design document</h3>
                <a href={DesignDoc} className="doc" target="_blank" rel="noreferrer">View here</a>
                <h3>By</h3>
                <p>Jessica Chan</p>
                <p>Sebastian Perez</p>
                <h2>Video</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aztXTNB8xCc" title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            </section>
        );
    }
}