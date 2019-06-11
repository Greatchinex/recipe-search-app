import React, { Component } from 'react';
import { Consumer } from '../ContextApi/Context';

class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className="mt-2 text-dancing accent text-center">Search For Recipes</h1>
                    <p className="text-center mt-2 text-capitalize">Search for various food recipes</p>
                    <Consumer>
                        {value => {
                            console.log(value)
                            return(
                                <form onSubmit={value.searchRecipes}>
                                    <div className="input-group mb-3">
                                        <input type="text" 
                                            className="form-control" 
                                            placeholder="Pizza, Chicken, Sandwich"
                                            name="RecipeTitle"
                                            onChange={value.onChange}
                                            value={value.RecipeTitle} 
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-success" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button> 
                                        </div>
                                    </div>


                                    {/* <div className="form-group">
                                        <input type="text" placeholder="Pizza, Chicken, Sandwich" name="trackTitle" className="form-control form-control-lg"/>
                                    </div>
                                    <button className="btn btn-success" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button> */}
                                </form>
                            )
                        }}
                   </Consumer>
                </div>
            </React.Fragment>
        )
    }
}

export default Search
