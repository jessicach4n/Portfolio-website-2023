import React, { Component } from "react";
import '../../css/projects.css'
import GoVideo from "../../assets/123Go.mp4"
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


export class GoApp extends Component {

    render() {
        return (
            <section className="content flex-content">
                <div>
                    <Tags tags={myConstants.GO_TAGS} />
                    <h1>123 GO!</h1>
                    <h2>The project</h2>
                    <div className="two-columns">
                        <p>
                            123 Go is
                        </p>
                    </div>
                    <h3>Materials</h3>
                    <p>This project was developped with Android Studio</p>
                    <a href="https://github.com/jessicach4n/123Go" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>        
                    <h3>Attributions</h3>
                    <p>Some images appearing in the video are by pikisuperstar on Freepik</p>
                </div>
                <video className="govid" width='250px' height='442px' src={GoVideo} controls></video>
            </section>




        );
    }
}