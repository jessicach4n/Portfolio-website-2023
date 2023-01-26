import React, { Component } from "react";

export class Title extends Component {
    constructor(props) {
        super(props);
        this.titlename = this.props.titlename;
    }

    render() {
        return (
            <div className="title">
                <h1>{this.titlename}</h1>
            </div>
        );
    }
}