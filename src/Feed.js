import React, { Component } from 'react';
import { getAllGifs } from './db/index.js';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }
  async componentDidMount(){
    let gifs = [];
    try {
      gifs = await getAllGifs();
    } catch (e) {
      console.error('Error retrieving GIFs form db: ', e);
    } finally {
      this.setState({gifs: gifs})
    }
  }
  render(){
    let { gifs } = this.state;
    return (
      <div className="gifs">
        {gifs.map(gif => (
          <div key={gif.id} className="gifDiv card">
            <img className="card-img" src={gif.url} alt={gif.url}/>
          </div>
        ))}
      </div>
    )
  }
}
