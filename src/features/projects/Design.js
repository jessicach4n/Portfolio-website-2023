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
                        tags={[myConstants.DESIGN]} />
                </Link>
            </div>
        );
    }
}