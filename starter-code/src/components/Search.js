import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  changeHandler(event) {
    let { name, value} = event.target;
    this.setState({ [name]: value });
  }

  formHandler = (event) => {
    event.preventDefault();
    this.props.searchFood(this.state);
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <form onSubmit={(event)=>this.formHandler(event)}>
        <input type="text" name="search" placeholder="Search..." onChange={(element) => this.changeHandler(element)} />
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}
