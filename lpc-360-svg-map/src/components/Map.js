import React from "react";
import { ReactComponent as UsSvg } from "../data/map.svg";

export class SelectBox extends React.Component {
    render() {
        return (
            <div className="col-3 selectRangeDD">
                <label>User Visits</label>
                <select onChange={this.props.changeHandler}>
                    <option disabled selected>Select One</option>
                    <option value="0">0-250</option>
                    <option value="1">250-500</option>
                    <option value="2">500-1000</option>
                    <option value="3">1000+</option>
                </select>
            </div>
        )
    }
}

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevHighlighted: [],
            highlighted: []
        };
        this.svgMap = React.createRef();
        this.listData = null;
        this.setHighlight = this.setHighlight.bind(this);
    }

    // fetch data from api
    async getData() {
        await fetch(`/fetchData`).then( response => response.json()).then(
            (fetchedData) => {
                this.listData = fetchedData
            });
    }
    
    // determines the states to highlight and to unhighlight
    async setHighlight(event) {

        // selects the previously highlighted states to de-highlight
        this.setState({
            prevHighlighted: this.state.highlighted
        })

        // selects the states to be highlighted given the range
        let range = event.target.value;
        let result = [];

        if (range === "0") {
            // 0 - 250
            result = this.listData.filter(usState => usState.visits >= 0 && usState.visits <= 250).map(usState => usState.id);
        }
        if (range === "1") {
            // 250 - 500
            result = this.listData.filter(usState => usState.visits >= 250 && usState.visits <= 500).map(usState => usState.id);
        }
        if (range === "2") {
            // 500 - 1000
            result = this.listData.filter(usState => usState.visits >= 500 && usState.visits <= 1000).map(usState => usState.id);
        }
        if (range === "3") {
            // 1000+
            result = this.listData.filter(usState => usState.visits >= 1000).map(usState => usState.id);
        }

        this.setState({
            highlighted : result
        });
    }

    // highlights the map
    async updateMap () {
        // RESET MAP
        this.state.prevHighlighted.forEach(function (st) {
            try {
                document.getElementsByClassName(st.toLowerCase())[0].classList.remove('highlighted');
            }
            catch (e) {
                // in case of those not in map
            }
        });
        // HIGHLIGHT
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

    async componentDidMount() {
        await this.getData();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <SelectBox changeHandler={this.setHighlight} />
                </div>
                <div className="row mapContainer">
                    <UsSvg ref={this.svgMap}/>
                </div>
            </div>
        );
    }
}