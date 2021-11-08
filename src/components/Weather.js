import React, { Component } from 'react';
import axios from 'axios';
import WeatherDay from './WeatherDay';
import Button from 'react-bootstrap/Button'

export default class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherInfo = async () => {

        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url)
        console.log(response.data)
        this.setState( {weatherForecast: response.data});
    }

    render() {
        
        return (
            <div>
            <Button variant="outline-dark" onClick={this.getWeatherInfo}>Get Weather Info</Button>
            {this.state.weatherForecast.map((day, idx) => <WeatherDay day={day} idx={idx} />)}
            </div>
        )}
}

