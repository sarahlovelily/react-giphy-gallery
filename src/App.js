import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm.js';
import GifList from './Components/GifList.js';
import Gif from './Components/Gif.js';
import NoGifs from './Components/NoGifs.js'
import './index.css';

class App extends Component {



  constructor() {
    super();
    this.state = {
      gifs : [],
    };
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = "cats") => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=16&api_key=8BeNL6KOcBZP87mawKlV6o4ghcUN2Mjh `)
    .then(response => {
         this.setState({
           gifs : response.data.data,
         });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }


  render() {
    return (

        <body>
          <div className="container">

            <SearchForm  onSearch={this.performSearch}/>

            <div className="photo-container">

             <GifList  data={this.state.gifs}/>

            </div>

          </div>
        </body>
    );
  }
}

export default App;
