import React from 'react';

function FoodBox(props) {
    const {food} = props
    return (
        <div>
             <div className="box">
                <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img alt="" src={food.image} />
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
                    <form className="control">
                    <button type="Submit" className="button is-info btnplus">+</button>
                    </form>
                </div>
                </div>
            </article>
            </div>
            
        </div>
    )
}

export default FoodBox;