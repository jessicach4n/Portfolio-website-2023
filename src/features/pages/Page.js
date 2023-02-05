import { Component } from "react";

export class Page extends Component {

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}