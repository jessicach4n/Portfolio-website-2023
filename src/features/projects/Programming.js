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
                        backgroundImage="assets/123go.jpg"
                        tags={myConstants.GO_TAGS} />
                </Link>
                <Link to={'/word-co-occurrence-algorithm'}>
                    <Card projectName="Word co-occurrence algorithm"
                            backgroundImage="assets/wordco.png"
                            tags={myConstants.WORDCO_TAGS} />
                </Link>
            </div>
        );
    }
}