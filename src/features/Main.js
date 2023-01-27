import React, { Component } from "react";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";



export class Main extends Component {

    render() {
        return (
            <div className="mainPage">
                <Home/>
                <Projects/>
            </div>
        );
    }
}