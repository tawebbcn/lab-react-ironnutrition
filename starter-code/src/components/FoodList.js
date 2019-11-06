import React, { Component } from 'react'
import foodsJSON from '../foods.json';
import FoodBox from './FoodBox';

export default class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsJSON
    }
  }

  render() {
    return (
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
    )
  }
}
