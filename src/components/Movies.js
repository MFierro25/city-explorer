import React, { Component } from 'react';
import axios from "axios";
import Movie from './Movie'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

export default class Movies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieData: []
        }
    }

    getMovieInfo = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?query=${this.props.city}`;
       
        let response = await axios.get(url)
        console.log(response.data)
        this.setState( {movieData: response.data});
   
    }

    render () {
        return (
            <div>
                <Button variant="outline-dark" onClick={this.getMovieInfo}>Search Movies with City Name</Button>
               <Row sm={2} md={3} lg={4} xl={4}>
                    {this.state.movieData.map((movie, idx) => <Movie movie={movie} idx={idx} />)}
               </Row>
            </div>
        )
    }
}