import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Movie extends Component {

    render() {

      let {movie} = this.props;

      return (
          
            <Card className="text-center" style={{width: '22rem'}}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Body>
                <Card.Text style={{height:"200px", overflow:"scroll", borderBottom:"thin solid black"}}>{movie.overview}</Card.Text>
                <Card.Subtitle>Release: {movie.release_date}</Card.Subtitle>
              </Card.Body>
            </Card>
    
      )
    }
  }