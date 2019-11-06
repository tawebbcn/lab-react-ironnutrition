import React from 'react'

const SearchFood = (props) => {
    console.log(props)
    const {searchFood} = props
    return (
        <div>
        <input type="text" name="name" placeholder="Search any food" onChange={(e)=>searchFood(e)} />
    </div>
    )
}

export default SearchFood
