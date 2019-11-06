import React, { Component } from 'react'
import foods from '../foods.json'
import FoodList from './FoodList';
import AddFood from './AddFood.js';
import SearchFood from './SearchFood.js';
import TodayFoods from './TodayFoods.js';

export default class FoodBox extends Component {

   state ={
        showFoods:foods,
        foods,
        showForm: false
        }
    
        addFoodHandler = (theFood) =>{
            const foodCopy = [...this.state.foods]
            foodCopy.push(theFood);
            this.setState({
                foods:foodCopy
            })
        }

        showForm=()=>{
            this.setState({
                showForm: !this.state.showForm
            })
        }

        searchFood =(e)=>{
        let foodCopy = []
        foodCopy = [...this.state.foods]
           const {value} = e.target
            const filteredFoods = foodCopy.filter(food => food.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({
                showFoods:filteredFoods
            }) 
           
        }

        addTodayFood=(e)=>{
            console.log('hola')

        }

    render() {
        const {showForm} = this.state
        return (
            <div>
            <SearchFood foods={this.state.foods} searchFood={(e)=>this.searchFood(e)}/>
            {showForm ? <AddFood addTheFood={this.addFoodHandler} /> : null}
            <button onClick={this.showForm}>{showForm ? "HIDE" : "SHOW"}</button>
            <FoodList foods={this.state.showFoods} addTodayFood={this.addTodayFood} />
            <TodayFoods foods={this.state.foods} />

            </div>
        )
    }
}
