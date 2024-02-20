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
                            This application is designed for children and their parents for an event in the park where they must 
                            hunt for QR codes using a smartphone. When a QR code is found, the participants can scan it and unlock 
                            one of two mobile games. 
                        </p>
                        <p>
                            The first game consists of counting one of the three animals (cow, pig or duck) as they fall to the bottom 
                            of the screen using the plus and minus buttons. The goal of this game is to teach children how to count and to
                            familiarize them with associating the right animal depiction to the word. 
                        </p>
                        <p>
                            In the second game, the child uses their finger to drag and drop the right words (Spring, Summer, Fall and Winter) 
                            to the right image best representing the season. This game teaches the seasons of the year by allowing 
                            them to drag around the words as much as they want until the correct answers are found.
                        </p>
                        <p>
                            At the completion of each game, a dialog box with the iconography of a certain physical exercise is shown on the screen. 
                            As part of the activities, the parent and their child are encouraged to perform the exercise to promote healthy habits 
                            in an entertaining way.
                        </p>
                        <p>
                            When both games are completed, a new dialog box will appear congratulating the participants on their success in completing 
                            the QR hunt.
                        </p>
                    </div>
                    <h3>Materials</h3>
                    <p>This project was developped with Android Studio in the context of a school project.</p>
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