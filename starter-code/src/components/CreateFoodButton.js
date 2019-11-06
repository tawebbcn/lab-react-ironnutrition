import React, { Component } from 'react'

export default class CreateFoodButton extends Component {

    state = {
        name: "",
        calories: "",
        image: ""
    }

    submitForm = (event) => {
        event.preventDefault();
        let newFood = this.state
        this.props.createFood(newFood);
        this.setState({
            name: "",
            calories: "",
            image: ""
        })
    }

    handleChange = (event) => {
        let { name } = event.target
        let { value } = event.target

        this.setState({
            [name]: value
        })
    }

    render(props) {
        return (
            <div>
                <form onSubmit={this.submitForm} >
                    <input type="text" name="name" onChange={(e) => this.handleChange(e)} placeholder="What's your food" />
                    <input type="number" name="calories" onChange={(e) => this.handleChange(e)} placeholder="How many calories?" />
                    <input type="text" name="image" onChange={(e) => this.handleChange(e)} placeholder="Add the image Url" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
