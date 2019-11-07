import React, { Component } from 'react'

export default class FoodAdd extends Component {
    constructor(props) {
        super()

        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 1
        }
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: 1
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    {/*  <label>Images:</label>
                    <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} /> */}

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
