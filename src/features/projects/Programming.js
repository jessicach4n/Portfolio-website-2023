import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import genArtImage from "../../assets/genart.png"
import radishImage from "../../assets/radish.png"
import goApp from "../../assets/123go.png"
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
                        backgroundImage={radishImage}
                        tags={myConstants.RADISH_TAGS} />
                </Link>
                <Link to={'/123go'}>
                    <Card projectName="Mobile games for kids"
                        backgroundImage={goApp}
                        tags={myConstants.GO_TAGS} />
                </Link>

            </div>
        );
    }
}