import React, { Component } from 'react'

export default class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
    }
  }

  changeHandler(event) {
    let { name, value} = event.target;
    this.setState({ [name]: value });
  }

  formHandler = (event) => {
    event.preventDefault();
    console.log(event)
    this.props.addFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={(event)=>this.formHandler(event)}>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={(element) => this.changeHandler(element)} required />
        <label>Calories:</label>
        <input type="number" name="calories" value={this.state.calories} onChange={(element) => this.changeHandler(element)} required />
        <label>Image:</label>
        <input type="text" name="image" value={this.state.image} onChange={(element) => this.changeHandler(element)} required/>
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}
