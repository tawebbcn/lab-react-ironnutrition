import React, { Component } from 'react'

export default class FoodCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            props,
            quantity: 0
        }
    }

    quantity(event) {
        this.setState({
            quantity: event.target.value
        })
    }

    createTodaysFood() {
        let newFood = {
            name: this.state.props.name,
            calories: this.state.props.calories,
            quantity: this.state.quantity
        }
        this.props.createTodaysFood(newFood)
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.img} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input onChange={(e) => this.quantity(e)}
                                    className="input"
                                    type="number"
                                    placeholder="How many?"
                                />
                            </div>
                            <div className="control">
                                <button onClick={() => this.createTodaysFood()} className="button is-info">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}