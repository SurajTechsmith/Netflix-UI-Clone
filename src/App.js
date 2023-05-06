import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './request';
import Banner from './Banner' 
import Nav from './Nav'
function App() {


  return (
    <div className="app">
    {/* navbarr */}
    <Nav />

    {/* banner */}
    <Banner />
      <Row title="AnimeFlix Latest" fetchUrl={requests.fetchLatest} islargeRow={true} />
      <Row title="AnimeFlix Top Trending" fetchUrl={requests.fetchTop}/> 
      <Row title="AnimeFlix Popular" fetchUrl={requests.fetchPopular}/> 
     
    </div>
  );
}

export default App;
