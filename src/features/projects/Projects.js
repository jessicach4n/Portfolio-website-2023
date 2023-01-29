import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";
import { Design } from "./Design";
import { Programming } from "./Programming";

const PROGRAMMING = 'Programming';
const DESIGN = 'Graphic Design';

export class Projects extends Component {
    constructor(props) {
        super(props);

        
        this.state = {  type: PROGRAMMING,
                        viewing: <Programming/>
                    };
        this.toggleProjectView = this.toggleProjectView.bind(this);
    }

    toggleProjectView() {
        if (this.state.type == PROGRAMMING) {
            this.setState({viewing: <Design/>});
            this.setState({type: DESIGN});
        }
        else {
            this.setState({viewing: <Programming/>})
            this.setState({type: PROGRAMMING});
        }
    }

    render() {
        return (
            <section id="section-projects">
                <div className="heading">
                    <Title titlename="My projects" />
                    <div className="project-nav">
                        <button id="btn-toggle" onClick={this.toggleProjectView}>
                            View {this.state.type == PROGRAMMING ? DESIGN : PROGRAMMING}
                        </button>
                    </div>
                </div>
                
                {this.state.viewing}
            </section>
        );
    }
}