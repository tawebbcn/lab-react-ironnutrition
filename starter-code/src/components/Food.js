import React, { Component } from 'react'
import foodsJSON from '../foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsJSON,
      displayForm: false
    }
  }

  addFoodHandler = (newFood)  =>{
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(newFood);
    this.setState({
      foods: foodsCopy
    })
  }

  showForm = (event) => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  render () {
    const {displayForm} = this.state
    return (
      <div>
        <div>
          <div>
            <button onClick={this.showForm}>Add new Food</button>
          </div>
            {displayForm ? <AddFood addFood={this.addFoodHandler} /> : null}
        </div>
        <div>
          {
          this.state.foods.map((food, index) =>
            <FoodBox
              key = {index}
              image = {food.image}
              name = {food.name}
              calories = {food.calories}
            />
          )
        }
        </div>
      </div>
    )
  }
}
