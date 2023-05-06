import React, { useEffect, useState } from "react";
import axios from "axios";
import re from "./request";
import "./Banner.css";
function Banner(){
    const base = 'https://api.themoviedb.org/3'
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(base+re.fetchOriginals);
            setMovies(request.data.results[Math.floor(Math.random()* request.data.results.length-1 )])
            
            return request;

        }
        fetchdata();
    },[]);
 function chrun(str,n){
    return str?.length>n? str.substr(0,n-1)+"...":str

 }
    return(
        <header className="Banner"
        
        style={{
        
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",
        
           
        }}
        >
      
        <div className="Banner_content">
            <h1 className="banner_title">
            {movies?.original_title||movies?.name||movies.original_names}

            </h1>
        
        <div className="Banner_buttons">
          <button className="Banner_button">Play</button>
          <button className="Banner_button">My List</button>
        </div>
        <h1 className="Movie_Overview">{chrun(movies?.overview,150)}</h1>
        </div>
        <div className="bannerfade"></div>

        </header>
    )
}
export default Banner