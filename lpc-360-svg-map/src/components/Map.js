import React, { useState, useEffect } from "react";
import { ReactComponent as UsSvg } from "../data/map.svg";

export class StateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        };
    }

    componentDidMount () {
        fetch("http://localhost:3001/fetchData")
        .then( response => response.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    listData : result
                });
            }
        )
    }

    render() {
        return(
            <select onChange={this.props.handleChange}>
            <option>Select One</option>
            {
                this.state.listData.map(s => (
                    <option value='{s.id}'>{s.name}</option>
                ))
            }
            </select>
        );
    }
}

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: "il"
        };
        this.svgMap = React.createRef();

        this.setHighlight = this.setHighlight.bind(this);
    }
    
    setHighlight(event) {
        this.setState({
            highlighted: event.target.value
        });
    }

    // need to create componentDidUpdate() for when props are being passed
    componentDidMount() {
        var path = document.getElementsByClassName('il')[0];
        path.classList.add('highlighted');
    }

    render() {
        return (
            <div>
                <StateList handleChange = {this.setHighlight}/>
                <div>
                    <UsSvg ref={this.svgMap}/>
                </div>
            </div>
        );
    }
}