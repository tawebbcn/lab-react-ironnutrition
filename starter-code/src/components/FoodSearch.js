import React, { Component } from 'react'
import foods from '../foods.json'

class FoodSearch extends Component {
    state = {
        foods
    }

    render() {
        return (
            <div>
                <form >
                    <input type="text" name='name' value={this.state.foods.name} onChange={(e) => this.searchFood(e)} />
                </form>
            </div>
        )
    }
}

export default FoodSearch
