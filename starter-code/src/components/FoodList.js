import React from 'react'

const FoodList=(props) => {
    const {foods, addTodayFood} = props
    return (
       
         <div>
            {foods.map((food, index)=>{
                return <div key={index} className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input
                                className="input"
                                type="number" 
                                 defaultValue="1"
                            />
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={(e)=>addTodayFood(e)}>
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                    </div>
            })} 
                
            </div>
            
       
    )
}


export default FoodList