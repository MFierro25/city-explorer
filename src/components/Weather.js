import React, { Component } from 'react';
import axios from 'axios';

export default class WeatherInfo extends Component {

    // construcor(props) {
    //     super(props)
    //         this.state = {
    //         weatherInfo: {}
    //     }
    // }

    getWeatherInfo = async () => {
        const url = `http://localhost:3001/weather`;
        let response = await axios.get(url)
        console.log(response.data)
        this.setState( {weatherInfo: response.data});
    }

    render () {
        return (
            <div>
                <button onclick={this.getWeatherInfo}>get weather</button>
            </div>
        )
    }
}