import React, { Component } from "react";
import '../../css/projects.css';
import { Title } from "../Title";
import { Design } from "./Design";
import { Programming } from "./Programming";
import * as myConstants from '../../constants'

export class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {  type: myConstants.PROGRAMMING,
                        viewing: <Programming/>
                    };
        this.toggleProjectView = this.toggleProjectView.bind(this);
        this.stateSetter = this.stateSetter.bind(this);
    }

    componentDidMount() {
        let type = window.sessionStorage.getItem('type');
        if (type != null) {
            if (type === myConstants.PROGRAMMING) {
                this.stateSetter(<Programming/>, type)
            }
            else {
                this.stateSetter(<Design/>, type)
            }
        }
    }

    stateSetter(viewing, type) {
        this.setState({viewing: viewing});
        this.setState({type: type});
        window.sessionStorage.setItem('type', type);
    }

    toggleProjectView() {
        if (this.state.type === myConstants.PROGRAMMING) {
            this.stateSetter(<Design/>, myConstants.DESIGN);
        }
        else {
            this.stateSetter(<Programming/>, myConstants.PROGRAMMING);
        }
    }

    render() {
        return (
            <section id="section-projects">
                <div className="heading">
                    <Title titlename="My projects" />
                    <div className="project-nav">
                        <button id="btn-toggle" onClick={this.toggleProjectView}>
                            View {this.state.type === myConstants.PROGRAMMING ? myConstants.DESIGN : myConstants.PROGRAMMING}
                        </button>
                    </div>
                </div>
                {this.state.viewing}
            </section>
        );
    }
}