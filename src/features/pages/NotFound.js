import React from "react";
import '../../css/projects.css'
import { Tags } from "../projects/Tags";
import * as myConstants from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { Page } from "./Page";
import { Link } from "react-router-dom";


export class NotFound extends Page {

    render() {
        return (
            <section className="content">
                <h1>Error 404 - Looks like you got lost...</h1>

            </section>




        );
    }
}