import React, { Component } from 'react'
import foodsJSON from '../foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import Search from './Search';
import TodaysBox from './TodaysBox';

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsJSON,
      todaysFoods: [],
      displayForm: false
    }
  }

  addFoodHandler = (newFood)  => {
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

  searchFood = (searchTerm) => {
    let foodsCopy = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm.search.toLowerCase());
    });
    this.setState({
      foods: foodsCopy
    });
  }

  addTodayHandler = (newToday) => {
    const todaysFoodsCopy = [...this.state.todaysFoods];
    todaysFoodsCopy.push(newToday);
    this.setState({
      todaysFoods: todaysFoodsCopy
    })
    console.log(this.state.todaysFoods)
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
          <Search searchFood={this.searchFood} />
        </div>
        <div>
          <div>
            {
              this.state.foods.map((food, index) =>
                <FoodBox
                  key = {index}
                  image = {food.image}
                  name = {food.name}
                  calories = {food.calories}
                  addToday = {this.addTodayHandler}
                />
              )
            }
          </div>

          <div>
            {
              this.state.todaysFoods.map((food, index) =>
                <TodaysBox
                  key = {index}
                  image = {food.image}
                  name = {food.name}
                  quantity = {food.quantity}
                  calories = {food.calories}
                />
              )
            }
          </div>
        </div>
        
      </div>
    )
  }
}
