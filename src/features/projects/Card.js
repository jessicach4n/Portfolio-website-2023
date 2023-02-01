import React, { Component } from "react";
import { Tags } from "./Tags"
import '../../css/projects.css';

export class Card extends Component {
    constructor(props) {
        super(props);

        this.projectName = this.props.projectName;
        this.backgroundImage = this.props.backgroundImage;
        this.tags = this.props.tags;
    }

    render() {
        return (
            <div className="project">
                <Tags tags={this.tags}/>
                <div className="card" style={{backgroundImage: `url(${this.backgroundImage})`}}>
                    <h2>{this.projectName}</h2>
                </div>
            </div>

        );
    }
}