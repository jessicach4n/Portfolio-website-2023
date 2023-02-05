import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { Page } from "./Page";


export class GoApp extends Page {

    render() {
        return (
            <section className="content flex-content">
                <div>
                    <Tags tags={myConstants.GO_TAGS} />
                    <h1>Mobile games for kids</h1>
                    <h2>The project</h2>
                    <div>
                        <p>
                        This application is made for children and their parents for an event in the park where they must hunt for QR codes using a smartphone.
                        It has physical activities and two educational games with two distinct themes: farm animals and the seasons of the year.
                        </p>
                    </div>
                    <h3>Materials</h3>
                    <p>This project was developped with Android Studio.</p>
                    <a href="https://github.com/jessicach4n/123Go" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>        
                    <h3>Attributions</h3>
                    <p>Some images appearing in the video are by pikisuperstar on Freepik.</p>
                    <p>Exercise iconographies by Stéphanie Voyer.</p>
                </div>
                <video className="govid" width='250px' height='442px' src="assets/123Go.mp4" controls autoPlay></video>
            </section>




        );
    }
}