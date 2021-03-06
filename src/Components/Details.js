import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../Gif/Spinner';

class Details extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            recipeDetails: {}
        }
    }

    // function to get details of recipes
    async getRecipeDetails() {
        try {
            // this.props.recipe_id: Gets the recipe id from the react router in the url of Recipes component
            const details = await axios.get(`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_MM_KEY}&rId=${this.props.match.params.id}`);

            // console.log(details);

            this.setState(() => {
                return {recipeDetails: details.data.recipe}
                }
            )
        } catch(error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getRecipeDetails();
    }
    

    render() {
        const { title, image_url, publisher, publisher_url, source_url, ingredients } = this.state.recipeDetails;

        if(this.state.recipeDetails === undefined || Object.keys(this.state.recipeDetails).length === 0) {
            return <Spinner />
        } else {
            return (
                <div className="row">     
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/" className="btn bg-accent mt-5 text-white lead">
                            Back To Recipe List
                        </Link>
                        <img src={image_url} alt="Recipe" className="w-100 mt-3" />
                    </div>
                    <div className="col-10 mx-auto col-md-6 mt-5">
                        <p className="text-dancing lead"> {title} </p>
                        <p className="text-slanted accent"> Provided by {publisher} </p>
                        <a href={publisher_url} className="btn btn-info" target="_blank" rel="noopener noreferrer"> Publishers Site </a>
                        <a href={source_url} className="btn btn-success ml-4" target="_blank" rel="noopener noreferrer"> Recipe Url </a>
                        <h1 className="text-dancing mt-4" style={{color: "#808000"}}>Ingredients</h1>
                        <ul className="list-group mt-4">
                           <li className="list-group-item text-slanted lead">
                                {ingredients}
                           </li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default Details
