import React, { Component } from "react";
import '../../css/projects.css'

export class GenArt extends Component {

    render() {
        return (
            <section className="content">
                <div className="heading">
                    <h1>Weather Art Generator</h1>
                    <div>
                        <button>Video demo</button>
                        <a href="https://xd.adobe.com/view/bc64e717-7982-457f-a692-a429f51572c8-e937/" target='_blank'>Adobe XD prototype</a>
                    </div>
                </div>
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
                <h3>By</h3>
                <p>Jessica Chan</p>
                <p>Sebastian Perez</p>
                <video src=""></video>
    
                
            </section>
        );
    }
}