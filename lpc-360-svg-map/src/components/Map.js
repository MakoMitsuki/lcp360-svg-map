import React from "react";
import { ReactComponent as UsSvg } from "../data/map.svg";

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevHighlighted: [],
            highlighted: []
        };
        this.svgMap = React.createRef();

        this.setHighlight = this.setHighlight.bind(this);
    }
    
    async setHighlight(event) {
        this.setState({
            prevHighlighted: this.state.highlighted
        })
        await fetch(`/fetchRange/${event.target.value}`)
        .then( response => response.json())
        .then(
            (result) => {
                this.setState({
                    highlighted : result
                });
            }
        )
    }

    async updateMap () {
        this.state.prevHighlighted.forEach(function (st) {
            try {
                document.getElementsByClassName(st.toLowerCase())[0].classList.remove('highlighted');
            }
            catch (e) {
                // in case of those not in map
            }
        });
        this.state.highlighted.forEach(function (st) {
            try {
                document.getElementsByClassName(st.toLowerCase())[0].classList.add('highlighted');
            }
            catch (e) {
                // in case of those not in map
            }
        });
    }

    async componentDidUpdate() {
        await this.updateMap();
    }

    render() {
        return (
            <div>
                <select onChange={this.setHighlight}>
                    <option disabled selected>Select One</option>
                    <option value="0">0-250</option>
                    <option value="1">250-500</option>
                    <option value="2">500-1000</option>
                    <option value="3">1000+</option>
                </select>
                <div id="mapContainer">
                    <UsSvg ref={this.svgMap}/>
                </div>
            </div>
        );
    }
}