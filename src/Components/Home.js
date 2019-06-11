import React, { Component } from 'react'
import Recipe from './Recipe';
import Search from './Search';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Search />
                <Recipe />
            </React.Fragment>
        )
    }
}

export default Home
