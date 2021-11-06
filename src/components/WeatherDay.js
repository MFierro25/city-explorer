import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'

export default class WeatherDay extends Component {

  render() {

    let { day, idx } = this.props;

    return (

      <Accordion key={idx}>
        <Accordion.Item eventKey={idx}>
          <Accordion.Header>{day.date}</Accordion.Header>
          <Accordion.Body>Todays Weather is looking like: {day.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}