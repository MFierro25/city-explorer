import React, { Component } from 'react';
import axios from "axios";

export default class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieData: []
        }
    }

    getMovieInfo = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?query=${this.props.city}`;
        console.log(this.props.city);
        let response = await axios.get(url)
        console.log(response.data)
        this.setState( {movieData: response.data});
   
    }

    render () {
        return (
            <div>
                <button onClick={this.getMovieInfo}>Search Movies with City Name</button>
                {this.state.movieData.length > 0 && this.state.movieData.map((movieInfo, idx) => <li key={idx}>Title: {movieInfo.title} Overview: {movieInfo.overview}</li>)}
            </div>
        )
    }
}