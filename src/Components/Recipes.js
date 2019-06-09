// import React from 'react';

// function Recipes(props) {

//     console.log(props.recipes)
//     const { image_url, title, publisher } = props.recipes;
//     console.log(props.recipes.title);

//     return (
//         <div className="col-10 mx-auto col-md-4">
//             <div className="card mb-4">
//                 <div className="card-header">
//                     <img src={image_url} alt="Recipe" />
//                     <p> {title} </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Recipes

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipes extends Component {
    render() {
        const { image_url, title, publisher, recipe_id, source_url } = this.props.recipes;
        console.log(title);
        return (
            <div className="col-10 mx-auto col-md-4 container">
                <div className="card mb-4">
                    <div className="card-header">
                        <img src={image_url} alt="Recipe" style={{width: "100%"}} />
                    </div>
                    <div className="card-body">
                        <p className="card-text lead"> {title} </p>
                        <p className="card-text text-slanted accent"> Provided by {publisher} </p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/details/recipe/${recipe_id}`} className="btn btn-info">
                            <i className="fas fa-utensils"></i> View Details
                        </Link>
                        <a href={source_url} className="btn btn-success ml-4" target="_blank" rel="noopener noreferrer"> Recipe Url </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipes
