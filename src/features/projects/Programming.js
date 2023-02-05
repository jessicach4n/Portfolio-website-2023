import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import { Link } from "react-router-dom";
import * as myConstants from '../../constants'

export class Programming extends Component {

    render() {
        return (
            <div>
                <Link to={'/weather-art-generator'}>
                    <Card projectName="Weather Art Generator"
                        backgroundImage="assets/genart.png"
                        tags={myConstants.GENART_TAGS} />
                </Link>
                <Link to={'/radish-party'}>
                    <Card projectName="Radish Party"
                        backgroundImage="assets/radish.png"
                        tags={myConstants.RADISH_TAGS} />
                </Link>
                <Link to={'/123go'}>
                    <Card projectName="Mobile games for kids"
                        backgroundImage="assets/123go.png"
                        tags={myConstants.GO_TAGS} />
                </Link>

            </div>
        );
    }
}