import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';


export default class App extends Component {

  constructor(props) {
    super(props) 
      this.state = {
          cityValue: '',
          lat: '',
          lon: '',
          error: false
      }
  }

  handleClick = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
   
      let response = await axios.get(url)
      console.log(response.data[0]);
      this.setState({location: response.data[0]})
    
  }

  handleChange = (e) => {
    this.setState({ cityValue: e.target.value })
  }

  render () {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
            <Form.Control onChange={this.handleChange} value={this.state.cityValue} type="text" placeholder="Enter city you want to explore" />
          </Form.Group>
        <Button onClick={this.handleClick} variant="primary" type="submit">
          Explore!
        </Button>
        </Form>
          <p>{this.state.display_name}, {this.state.lat}, {this.state.lon}</p>
      </div>
    )
  }
}