import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import BeerCard from './BeerCard';

class App extends Component {
  constructor() {
    super()

    this.state = {
      arrayOfBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers').then((res) => {
      const arrayOfBeer = res.data.map((beer) => ({
        ...beer,
        showDescription: false, 
      }));
      this.setState({ arrayOfBeer });
    });
  }

  handleLike = (index) => {
    this.setState((prevState) => {
      const updatedArray = prevState.arrayOfBeer.map((beer, i) =>
        i === index ? { ...beer, showDescription: !beer.showDescription } : beer
      );
      return { arrayOfBeer: updatedArray };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ol>

          {this.state.arrayOfBeer.map((beer, index) => (
            <BeerCard
              key={index}
              index={index}
              name={beer.name}
              first_brewed={beer.first_brewed}
              image_url={beer.image_url}
              abv={beer.abv}
              tagline={beer.tagline}
              description={beer.description}
              showDescription={beer.showDescription}
              handleLike={this.handleLike}
            />
            ))}
        </ol>
        </header>
      </div>
    );
  }
}
export default App;
