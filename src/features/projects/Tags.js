import React, { Component } from "react";
import '../../css/projects.css';

export class Tags extends Component {
    constructor(props) {
        super(props);

        this.tags = this.props.tags;
    }

    render() {
        return (
            <div className="tags">
                {
                    this.tags.map((value, index) => {
                        return <span key={index}>{value}</span>
                      })
                }
            </div>

        );
    }
}