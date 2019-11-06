import React, { Component } from 'react'

export default class TodaysFood extends Component {
    render(props) {
        return (
            <li>{props.name}, {props.calories} calories</li>
        )
    }
}
