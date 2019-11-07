import React, { Component } from 'react'
import FoodList from './FoodList'
import FoodAdd from './FoodAdd'
import foods from '../foods.json'
import FoodSearch from './FoodSearch'

class FoodBox extends Component {
    state = {
        foods,
        showForm: false
    }
    addFoodHandler = (theFood) => {
        const foodCopy = [...this.state.foods]
        foodCopy.push(theFood);
        this.setState({
            foods: foodCopy
        })
    }
    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }
    searchFood = () => {
        const foodCopy = [...this.state.foods]
        const minus = foodCopy.name.toLowerCase()
        console.log(minus)
    }
    
    render() {
        const {showForm} = this.state
        return (
            <div>
                {showForm ? <FoodAdd addTheFood={this.addFoodHandler}/>: null}
                <button onClick={this.showForm}>{showForm ? 'HIDE': 'SHOW'}</button>
                <FoodSearch foods={this.state.foods}/>
                <FoodList foods={this.state.foods} />
                
                
            </div>
        )
    }
}
export default FoodBox;
