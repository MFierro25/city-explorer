import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export default class CityCard extends Component{
    render () {
        console.log(this.props);
        return (
            <div>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={this.props.map} />
                    <Card.Body>
                        <Card.Title>{this.props.location.display_name}</Card.Title>
                        <Card.Text>Lat: {this.props.location.lat}</Card.Text>
                        <Card.Text>Lon: {this.props.location.lon}</Card.Text>
                    </Card.Body>     
                </Card>
                
            </div>
        )
    }
}