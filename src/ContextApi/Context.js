import React, { Component } from 'react';
import axios from 'axios';
import { Recipes } from '../tempList';

const RecipeContext = React.createContext();

class Context extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            recipes: [],
            RecipeTitle: ""
        }
    }

    // Function to get Recipes from 3rd party Api
    // async getRecipes() {
    //     try {
    //         const data = await axios.get(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_MM_KEY}&page=2`);

    //         this.setState({
    //             recipes: data.data.recipes
    //         })
    //     }
    //     catch(error) {
    //         console.log(error);
    //     }
    // }

    // // Life Cycle Hook To Load The Recipes Upon Page Load
    // componentDidMount() {
    //     this.getRecipes();
    // }

    componentDidMount() {
        this.setRecipes();
    }

    setRecipes() {
        let recipes = [];
        Recipes.forEach(item => {
            const singleItem = {...item};  // ...item: Copying the values from the recipes array
            recipes = [...recipes, singleItem]
        });

        this.setState(() => {
            return { recipes }
        })
    }

    // onChange Event
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    // Function to search for a recipe
    searchRecipes = (e) => {
        e.preventDefault();
        axios.get(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_MM_KEY}&q=${this.state.RecipeTitle}&page=2 `)
            .then(res => {
                // console.log(res.data);
                this.setState(() => {
                    return {recipes: res.data.recipes, RecipeTitle: ""}
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <RecipeContext.Provider value={{
                ...this.state,
                onChange: this.onChange,
                searchRecipes: this.searchRecipes
                }}
            >
                {this.props.children}
            </RecipeContext.Provider>
        )
    }
}


const Consumer = RecipeContext.Consumer;

export { Context, Consumer }