import React, { Component } from 'react';
import foods from "./foods.json"
import "bulma/css/bulma.css"
import './App.css';
import FoodCard from './components/FoodCard';
import CreateFoodButton from "./components/CreateFoodButton"
import SearchBar from "./components/SearchBar"
import TodaysFood from "./components/TodaysFood"

class App extends Component {

  state = {
    foods,
    displayCreating: false,
    todaysFood: []
  }

  toggleDisplayCreating = () => {
    this.setState({
      displayCreating: !this.state.displayCreating
    })
  }

  createFood = (newFood) => {
    foods.push(newFood)

    this.setState({
      foods
    })
  }

  filterFood = (param) => {

    let completeFoodList = [...foods]

    let newFoods = completeFoodList.filter((food) => {
      return food.name.includes(param)
    })

    this.setState({
      foods: newFoods
    })
  }

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        {
          this.state.displayCreating ?
            <div>
              <button onClick={() => this.toggleDisplayCreating()}>Nope</button>
              <CreateFoodButton createFood={(newFood) => this.createFood(newFood)} />
            </div>
            :
            <button onClick={() => this.toggleDisplayCreating()}>Create a new Food</button>
        }

        <SearchBar filterFood={(param) => this.filterFood(param)} />

        <div style={flex}>

          <div>
            {
              this.state.foods.map((food, index) => {
                return <FoodCard key={index} name={food.name} calories={food.calories} img={food.image} />
              })
            }
          </div>
          <ul>
            {
              this.state.todaysFood.map((food, index) => {
                return <TodaysFood key={index} name={food.name} calories={food.calories} />
              })
            }
          </ul>

        </div>
      </div>
    );
  }
}

let flex = {
  display: "flex"
}

export default App;
