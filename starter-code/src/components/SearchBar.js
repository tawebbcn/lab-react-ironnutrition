import React, { Component } from 'react'

export default class SearchBar extends Component {

    submitSearch(event) {
        event.preventDefault();
        let param = event.target.value;
        this.props.filterFood(param)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.submitSearch(e)} />
            </div>
        )
    }
}
