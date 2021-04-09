import React, { useState, useEffect } from "react";
import { ReactComponent as UsSvg } from "../data/map.svg";

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: "il"
        };
        this.svgMap = React.createRef();
    }
    
    setHighlight(usState) {
        this.setState({
            highlighted: usState
        });
    }

    componentDidMount() {
        var path = document.getElementsByClassName('il')[0];
        path.classList.add('highlighted');
    }

    render() {
        return (
            <div>
                <UsSvg ref={this.svgMap}/>
            </div>
        );
    }
}