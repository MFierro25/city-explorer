import React, { Component } from 'react';
import CityForm from './components/CityForm';
import axios from 'axios';
import CityCard from './components/CityCard';
import Alert from 'react-bootstrap/Alert';
import Weather from './components/Weather';



export default class App extends Component {

  constructor(props) {
    super(props) 
      this.state = {
          location: {},
          error: false,
          map: ''
      }
  }

  getLocation = async (city) => {
    city.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.location}&format=json`;
    try {
      let response = await axios.get(url)
      console.log(response.data[0]);
      this.setState({location: response.data[0]}, this.getMapUrl)
      this.getMapUrl();
  } catch (e) {
    console.error(e);
    this.setState({ error: true })
  }
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value })
  }

  getMapUrl = () => {
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`;
    this.setState( {
      map: url
    })
  }

  render () {
    return (
      <div>
        <CityForm location = {this.state.location} handleChange = {this.handleChange} getLocation={this.getLocation}/>
        <CityCard location = {this.state.location} map = {this.state.map}/>
        {this.state.error && <Alert variant='danger'>ERROR</Alert>}
        {this.state.map && <Weather location = {this.state.location} />}
      </div>
    )
  }
}