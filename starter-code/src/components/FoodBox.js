import React, { Component } from 'react'
import foods from '../foods.json'
import FoodList from './FoodList';
import AddFood from './AddFood.js';

export default class FoodBox extends Component {

   state ={
            foods: foods,
            newFoods:{
                name:"",
                calories:"",
                image:""
            }
        }


        addFood=(event)=>{

        }

        handleChange(event){
            let {name, value} = event.target;
            this.setState.newFoods({[name]:value})
        }
        handleFormSubmit=(event)=>{
            event.preventDefault();
            this.props.addTheMovie(this.state);
            this.setState({
                title:"",
                director : "",
                hasOscars: false,
                IMDbRating: "",
            })
        }


    render() {
        return (
            <div>
                <FoodList foods={this.state.foods} />
                <AddFood foods={this.state.foods} />
                <button onClick={this.state.addFood}></button>

                <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="Name" value={this.state.name} onChange={(e)=>this.handleChange(e)} />
        ​
        ​
                <label>N of calories</label>
                <input type="text" name="Calories" value={this.state.calories} onChange={(e)=>this.handleChange(e)}/>
            
                <label>Image</label>
                <input type="text" name="Image" value={this.state.image} onChange={(e)=>this.handleChange(e)} />

                <input type="submit" value="Submit" />
             </form>

            </div>
        )
    }
}
