import React, { Component } from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';

class FoodList extends Component {
    state = {foods}

    addFoodHandler(foodIndex){
        const foodsCopy = [...this.state.foods];
        foodsCopy.push(foodIndex, 1);
        this.setState({
            foods: foodsCopy
        })
    }

    render() {
        const {foods} = this.state
        return (
            <section className="food-list">
                {foods.map((oneFood, index) =>{
                    return(
                        <FoodBox key={index} food={oneFood} clickToAdd={() => this.addFoodHandler(index)}/>
                    )
                    })
                }
            </section>
        )
    }
}


export default FoodList;