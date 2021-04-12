import React from "react";

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