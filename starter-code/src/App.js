import React, { Component } from 'react';
import foods from './foods.json'
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar.js';


// import foods from './foods.json'

class App extends Component {
  state = {
    foods,
    showForm: false
  }

  addFoodHandler = food => {
    foods.push(food)
    this.setState({
      foods: foods
    })
  } 

  displayForm = () =>{
    this.setState({
      showForm: !this.state.showForm
    })
  }


  render() {
    const {showForm} = this.state
    return (
     <div>
     <h1>IronNutrition</h1>
     <SearchBar/>
     <button onClick={()=>this.displayForm()}>
     {showForm ? "Hide" : "Add Food"}
     </button>
          { 
           showForm ?           
          <AddFood addFood={this.addFoodHandler}/>         
          : null
          }
          <FoodList />  
          {/* <TodaysFood />        */}
     </div>
    );
  }
}

export default App;
