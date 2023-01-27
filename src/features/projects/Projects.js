import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";
import { Card } from "./Card";
import genArtImage from "../../assets/genart.png"
import { Outlet, Link } from "react-router-dom";



export class Projects extends Component {

    render() {
        return (
            <div id="section-projects">
                <Title titlename="My projects"/>
                <Link to={'/generateur-art-meteorologique'}>
                    <Card projectName="Générateur d'art météorologique" 
                          backgroundImage={genArtImage}/>
                </Link>
            </div>
        );
    }
}