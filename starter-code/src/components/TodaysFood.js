import React, { Component } from 'react'

export default class TodaysFood extends Component {

    render() {
        return (
            <li>{this.props.quantity} {this.props.name}, {this.props.calories} calories</li>
        )
    }
}
