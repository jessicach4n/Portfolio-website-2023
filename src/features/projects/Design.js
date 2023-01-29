import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import genArtImage from "../../assets/genart.png"
import { Link } from "react-router-dom";

const DESIGN = 'Design';


export class Design extends Component {

    render() {
        return (
            <div>
                <Link to={'/screen-printing'}>
                    <Card projectName="Screen Printing"
                        tags={[DESIGN]} />
                </Link>
            </div>
        );
    }
}