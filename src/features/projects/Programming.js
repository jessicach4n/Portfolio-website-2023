import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import genArtImage from "../../assets/genart.png"
import { Link } from "react-router-dom";
import * as myConstants from '../../constants'

export class Programming extends Component {

    render() {
        return (
            <div>
                <Link to={'/weather-art-generator'}>
                    <Card projectName="Weather Art Generator"
                        backgroundImage={genArtImage}
                        tags={myConstants.GENART_TAGS} />
                </Link>
                <Link to={'/radish-party'}>
                    <Card projectName="Radish Party"
                        tags={[myConstants.PROGRAMMING, myConstants.UNITY, myConstants.CS]} />
                </Link>
            </div>
        );
    }
}