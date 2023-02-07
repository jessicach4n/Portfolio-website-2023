import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import { Link } from "react-router-dom";
import * as myConstants from '../../constants'

export class Design extends Component {

    render() {
        return (
            <div>
                <Link to={'/screen-printing'}>
                    <Card projectName="Screen Printing"
                        backgroundImage="assets/denis-malo5.jpg"
                        tags={myConstants.SCREENPRINTING_TAGS} />
                </Link>
                <Link to={'/typomanie'}>
                    <Card projectName="Typomanie"
                        backgroundImage="assets/typomanie1.jpg"
                        tags={myConstants.TYPOMANIE_TAGS} />
                </Link>
                
            </div>
        );
    }
}
