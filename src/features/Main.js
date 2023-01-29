import React, { Component } from "react";
import { Home } from "./home/Home";
import { About } from "./projects/About";
import { Contact } from "./projects/Contact";
import { Projects } from "./projects/Projects";



export class Main extends Component {

    render() {
        return (
            <div className="mainPage">
                <Home/>
                <Projects/>
                <About/>
                <Contact/>
            </div>
        );
    }
}