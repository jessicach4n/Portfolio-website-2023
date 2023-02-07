import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { Page } from "./Page";


export class WordAlgo extends Page {

    render() {
        return (
            <section className="content flex-content">
                <div>
                    <Tags tags={myConstants.WORDCO_TAGS} />
                    <h1>Word Co-Occurrence Algorithm</h1>
                    <h2>The project</h2>
                    <div>
                        <p>
                        </p>
                    </div>
                    <h3>Materials</h3>
                    <p>This project was developped with Python and Numpy.</p>
                    <a href="https://github.com/jessicach4n/ChanJessica_PerezSebastian" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                </div>
            </section>




        );
    }
}