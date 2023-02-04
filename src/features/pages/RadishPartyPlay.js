import React, { Component } from "react";
import '../../css/projects.css'
import RadishWebGL from "./RadishWebGL";

export class RadishPartyPlay extends Component {

    render() {
        return (
            <div className="play">
                <RadishWebGL/>
            </div>
        );
    }
}