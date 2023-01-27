import React, { Component } from "react";
import { Tags } from "./Tags"
import '../../css/projects.css';

export class Card extends Component {
    constructor(props) {
        super(props);

        this.projectName = this.props.projectName;
        this.backgroundImage = this.props.backgroundImage;
    }

    render() {
        console.log(this.backgroundImage)
        return (
            <div className="project">
                <Tags tags={['Programming', 'Web', 'ReactJS', 'PostgreSQL', 'p5']}/>
                <div className="card" style={{backgroundImage: `url(${this.backgroundImage})`}}>
                    <h2>{this.projectName}</h2>
                </div>
            </div>

        );
    }
}