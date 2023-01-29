import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import genArtImage from "../../assets/genart.png"
import { Link } from "react-router-dom";

const PROGRAMMING = 'Programming';
const WEB = 'Web';
const REACT = 'ReactJS';
const POSTGRESQL = 'PostgreSQL';
const P5 = 'p5';
const UNITY = 'Unity';
const CS = 'C#';

export class Programming extends Component {

    render() {
        return (
            <div>
                <Link to={'/weather-art-generator'}>
                    <Card projectName="Weather Art Generator"
                        backgroundImage={genArtImage}
                        tags={[PROGRAMMING, WEB, REACT, POSTGRESQL, P5]} />
                </Link>
                <Link to={'/radish-party'}>
                    <Card projectName="Radish Party"
                        tags={[PROGRAMMING, UNITY, CS]} />
                </Link>
            </div>
        );
    }
}