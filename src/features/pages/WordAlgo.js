import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Page } from "./Page";


export class WordAlgo extends Page {

    render() {
        return (
            <section className="content flex-content">
                <div>
                    <Tags tags={myConstants.WORDCO_TAGS} />
                    <h1>Word Co-Occurrence Algorithm</h1>
                    <h2>The project</h2>
                    <div className="two-columns">
                        <p>
                            The project was done in three versions. In this iteration, we use a database to
                            store the data collected in the first version of the project from comparing words
                            near each other in a text. With a database, we can collect information from multiple
                            texts to train the algorithm and achieve more accurate results.
                        </p>
                        <p>
                            The database allows us to create a dictionary of synonyms in which we can search
                            for the best matches given a word provided at the command line. We take into account
                            the window size, the encoding, the text file and the optional verbose argument that
                            displays the time needed to perform the training or the search.
                        </p>
                        <p>
                            To start the program, first you need to create the database by running the <code>mainBD.py</code> program.
                            To calculate the score, the user can choose from three different methods of calculations with
                            varying scoring results : scalar product, least-squares or city-block.
                        </p>
                    </div>
                    <h3>Materials</h3>
                    <p>This project was developped with Python and Numpy in the context of a school project.</p>
                    <a href="https://github.com/jessicach4n/ChanJessica_PerezSebastian" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <h3>In collaboration with</h3>
                    <p>Sebastian Perez</p>
                    <h2>Video</h2>
                    <video className="media" src="assets/wordco.mp4" width="1000px" height="auto" controls></video>
                </div>

            </section>




        );
    }
}