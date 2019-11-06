import React, { Component } from 'react';

export default class AddFood extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            calories: "",
            image: "",
            quantity: 0         
    }}

    handleChange(event) {
        let { name, value } = event.target;
     /*    if(){
            value = true;
        } */
        this.setState({[name]: value});
    }
  

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: "",
            calories: "",
            image: "",
            quantity: 0    
        })
    };


    render() {
        return (
            <div>
                  <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />

          <label>image URL:</label>
          <input
            type="image"
            name="image"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form> 
            </div>
        )
    }
}
