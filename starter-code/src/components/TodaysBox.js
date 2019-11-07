import React, { Component } from 'react'

export default class TodaysBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
    }
  }


  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.calories}</p>
        <p>{this.props.quantity}</p>
      </div>
    )
  }
}
