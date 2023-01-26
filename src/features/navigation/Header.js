import React, { Component } from "react";
import { Nav } from './Nav';
import '../../css/header.css'

export class Header extends Component {

    render() {
        return (
            <header>
                <Nav/>
            </header>
        );
    }
}

