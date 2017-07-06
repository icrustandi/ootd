import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import axios from 'axios';

// const request = require('request');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
  }

  componentDidMount() {
    axios.get('/clothes').then(res => {
      console.log('res body ', res.data);
      const clothes = res.data;
      this.setState({clothes});
    });
  }

  render() {
    console.log(this.state.clothes);
    return (
      <div>
        <ul>
          {this.state.clothes.map(clothing =>
            <li key={clothing.id}>
              User ID: {clothing.UserId}
              <br/>
              Brand: {clothing.brand}
              <br/>
              Clothing Type: {clothing.type}
              <br/>
              Color: {clothing.color}
              <br/>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
