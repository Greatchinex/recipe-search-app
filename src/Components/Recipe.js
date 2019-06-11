import React, { Component } from 'react';
import { Consumer } from '../ContextApi/Context';
import Recipes from './Recipes';
import Spinner from '../Gif/Spinner';

class Recipe extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value.recipes);
                    const { recipes } = value;

                    if(recipes === undefined || recipes.length === 0) {
                        return <Spinner />
                    } else {
                        return(
                            <React.Fragment>
                                <h3 className="text-center mb-4 text-slanted mt-5"> Recipe List </h3>
                                <div className="row">
                                    {recipes.map(recipe => <Recipes  key={recipe.recipe_id} recipes={recipe} />)}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Recipe
