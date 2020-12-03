import React, { Component } from 'react';
import SearchBar from "./searchbar.jsx";
import Gif from "./gif.jsx";
import GifList from "./giflist.jsx";
import giphy from "giphy-api";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "LqROx7qRgAjT4yC5vR",
    }
  }

  search = (query) => {
    giphy('6raZChq1NPJ6Jwi5QvHyJnUj6Oq6jhqq').search({
      q: query,
      rating: 'g',
    }, (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id,
    })
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar functionSearch={this.search} />
          <Gif id={this.state.selectedGifId} select={this.select} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
