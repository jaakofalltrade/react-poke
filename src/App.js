import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header/Header';
import BodyAll from './components/Body/BodyAll';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      regions: [],
      locations: [],
      areas: [],
      currPoke: [],
      capturedPoke: [],
      currRegion: "",
      currLocation: "",
      currArea: "",
      isEmpty: false,
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/region/')
    .then(e => {
      this.setState({
        regions: e.data.results,
        currRegion: e.data.results[0].url,
      });
      return e.data.results
    })
    .then(e => {
      axios.get(`${e[0].url}`)
      .then(e => {
        this.setState({
          locations: e.data.locations,
          currLocation: e.data.locations[0].url,
        });
        return e.data.locations;
      })
      .then(e => {
        axios.get(`${e[0].url}`)
        .then(e => {
          this.setState({
            areas: e.data.areas,
            currArea: e.data.areas[0].url,
          });
        });
      });
    });
  }

  changedTheArea = (e) => {
    console.log(e)
  }

  changedTheLocation = (e) => {
    this.setState({
      currLocation: e,
      currPoke: [],
    })
    axios.get(`${e}`)
    .then(res => {
      if(!res.data.areas.length) {
        this.setState({
          areas: res.data.areas,
          currArea: "",
          isEmpty: true,
        });
      } else {
        this.setState({
          areas: res.data.areas,
          currArea: res.data.areas[0].url,
          isEmpty: false,
        });
      }
    });
  }

  changedTheRegion = (e) => {
    this.setState({
      currRegion: e,
    });
    axios.get(`${e}`)
    .then(res => {
      this.setState({
        locations: res.data.locations,
        currLocation: res.data.locations[0].url,
        currPoke: [],
      });
      this.changedTheLocation(res.data.locations[0].url);
    });
  }

  captureThePoke = () => {
    if(this.state.capturedPoke.length != 6) {
      axios.get(this.state.currPoke.url)
      .then(x => {
        return x.data
      })
      .then(res => {
        console.log(res.sprites.front_default);
        this.setState({
          capturedPoke: [...this.state.capturedPoke,
            {
              name: this.state.currPoke.name,
              url: res.sprites.front_default
            }],
          currPoke: [],
        })
      })
      
    } else {
      alert("You're out of pokeball mate!");
    }
  }

  clickExplore = () => {
    if(this.state.currArea != "") {
      axios.get(this.state.currArea)
      .then(res => {
        return res.data.pokemon_encounters;
      })
      .then(e => {
        this.setState({
          currPoke: e[Math.floor(Math.random() * e.length)].pokemon,
        })
      });
    } else {
      alert("Empty Area bruv!");
    }
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <div className="overlay">
          <div className="app-body-container">
            <BodyAll
              clickExplore={this.clickExplore}
              changedTheArea={this.changedTheArea}
              changedTheLocation={this.changedTheLocation}
              changedTheRegion={this.changedTheRegion}
              captureThePoke={this.captureThePoke}
              regions={this.state.regions}
              locations={this.state.locations}
              areas={this.state.areas}
              currPoke={this.state.currPoke}
              capturedPoke={this.state.capturedPoke}
            />
          </div>
        </div>
      </div>
    );
  }
}
