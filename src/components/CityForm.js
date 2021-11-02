import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


export default class CityForm extends Component {

    render () {
        return (
            <Container>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                <Form.Control onChange={this.props.handleChange} placeholder="enter a city you want to explore" type="text" />
                </Form.Group>
                <Button className = 'button' onClick={this.props.getLocation} variant="primary" type="submit">
                    Explore!
                </Button>
                </Form>
            </Container>
        )
    }
}