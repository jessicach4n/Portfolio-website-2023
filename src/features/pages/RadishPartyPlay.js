import React from "react";
import '../../css/projects.css'
import { Page } from "./Page";
import RadishWebGL from "./RadishWebGL";

export class RadishPartyPlay extends Page {

    render() {
        return (
            <div className="play">
                <RadishWebGL/>
            </div>
        );
    }
}