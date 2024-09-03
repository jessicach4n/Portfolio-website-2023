import React, { Component } from "react";
import '../../css/projects.css';
import { Card } from "./Card";
import { Link } from "react-router-dom";
import * as myConstants from '../../constants'

export class Design extends Component {

    render() {
        return (
            <div>
                <Link to={'/video-editing'}>
                    <Card projectName="Video Editing"
                        backgroundImage="assets/video-editing.jpg"
                        tags={myConstants.VIDEO_TAGS} />
                </Link>
                <Link to={'/screen-printing'}>
                    <Card projectName="Screen Printing"
                        backgroundImage="assets/denis-malo5.jpg"
                        tags={myConstants.SCREENPRINTING_TAGS} />
                </Link>
                <Link to={'/typomania'}>
                    <Card projectName="Typomania"
                        backgroundImage="assets/typomanie1.jpg"
                        tags={myConstants.TYPOMANIE_TAGS} />
                </Link>
                <Link to={'/ridm'}>
                    <Card projectName="RIDM"
                        backgroundImage="assets/RIDM-1.jpg"
                        tags={myConstants.RIDM_TAGS} />
                </Link>
                <Link to={'/media-solutions'}>
                    <Card projectName="Media Solutions"
                        backgroundImage="assets/solutionmedia1.jpg"
                        tags={myConstants.SOLUTION_MEDIA_TAGS} />
                </Link>
                <Link to={'/motion-design'}>
                    <Card projectName="Motion Design"
                        backgroundImage="assets/motion-design.jpg"
                        tags={myConstants.MOTION_TAGS} />
                </Link>
                <Link to={'/new-castle'}>
                    <Card projectName="Newcastle Brown Ale Packaging"
                        backgroundImage="assets/newcastle1.jpg"
                        tags={myConstants.NEWCASTLE_TAGS} />
                </Link>
                
            </div>
        );
    }
}
