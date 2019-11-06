import React, { Component } from 'react'

export default class FoodBox extends Component {
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
    this.props.addToday(this.props);
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <form className="media-right" onSubmit={(event)=>this.formHandler(event)}>
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" defaultValue="1" name="quantity"/>
              </div>
              <div className="control">
                <button className="button is-info" type="submit">+</button>
              </div>
            </div>
          </form>
        </article>
      </div>
    )
  }
}
