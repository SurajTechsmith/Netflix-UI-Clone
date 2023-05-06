import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Youtube from "react-youtube";
import axios from "axios";
import "./Row.css"
import movieTrailer from "movie-trailer";

    

const bimg_url = `https://image.tmdb.org/t/p/original/`;
const opts = {
  height: "300",
  width:"100%",
  playervars: {
    autoplay:1,
  }
}
function Row({title, fetchUrl, islargeRow}) {
    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl]=useState("");
    useEffect(()=>{
      async function fetchData(){
       
        // const base = 'https://api.themoviedb.org/3'
        const base = 'https://api.themoviedb.org/3'
     const request = await axios.get(base+fetchUrl).catch((err)=>console.log(err));
      setMovies(request.data.results);
      return request;
    }
      fetchData();



    },[fetchUrl]);

    const handleClick=(movie)=>{
      if(trailerUrl){ setTrailerUrl('');}

      else {
        movieTrailer(movie?.name||"").then((url)=>{
          const urlParams= new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));

        }).catch((err)=>{console.log(err)});
    }}
    
      return (
    <div className='row'>
    <h2 className='title'>{title}</h2>
    <div className='row_posters'>
    {movies.map(movie =>(
      
    <img key={movie.id} 
    onClick={()=>{handleClick(movie)}}
    className={`row_poster ${islargeRow && "row_posterLarge"}`}
     src={islargeRow ? bimg_url+movie.poster_path : bimg_url+movie.backdrop_path} alt={movie.original_title} />

    ))}
      
    </div> 
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}


      
    </div>
  )
}

export default Row
