import React, { useState, useEffect } from "react";
import { ReactComponent as UsSvg } from "../data/map.svg";

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: "il"
        };
    }
    
    setHighlight(usState) {
        this.setState({
            highlighted: usState
        });
    }

    render() {
        return (
            <div>
                <UsSvg />
            </div>
        );
    }
}