import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipes extends Component {
    render() {
        const { image_url, title, publisher, recipe_id, source_url } = this.props.recipes;
        return (
            <div className="col-10 mx-auto col-md-4 container">
                <div className="card mb-4">
                    {/* <div className="card-header"> */}
                        <img src={image_url} alt="Recipe" style={{height: "14em"}} className="img-card-top" />
                    {/* </div> */}
                    <div className="card-body">
                        <p className="card-text lead"> {title} </p>
                        <p className="card-text text-slanted accent"> Provided by {publisher} </p>
                    </div>
                    <div className="card-footer">
                        <span className="d-flex">
                            <Link to={`/details/recipe/${recipe_id}`} className="btn btn-info">
                                <i className="fas fa-utensils"></i> View Details
                            </Link>
                            <a href={source_url} className="btn btn-success ml-4" target="_blank" rel="noopener noreferrer"> Recipe Url </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipes
