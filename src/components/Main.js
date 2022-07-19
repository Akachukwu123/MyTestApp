import React, { useEffect, useState } from 'react'
import Axios from 'axios';
 
function Main(){
let [movie, setMovie] =  useState({movie:[]});
useEffect(()=>{
  const getMovie = async()=>{  
    let res = await Axios.get('http://www.omdbapi.com/?apikey=1f4d3d15&t=john&y=2022');  
     setMovie(res.data) 
  };
  getMovie();
}, [movie]);
  return <div className='main'>
    <div className='search'> 
    <div className='container'> <b>Search</b> <br></br> <input onChange={async(e)=>{
      let res = await Axios.get(`http://www.omdbapi.com/?apikey=1f4d3d15&s=${e.target.value}&y=2022`); 
      setMovie(res) 
      }} type="search" /></div>
  </div>  
    <div className='container category'>
      <div> <b> {movie.Genre} </b> </div>
      <div className='movies'>
        <div className='movieName'>
          <b>{movie.Title} </b> 
        </div> 
      </div>
    </div>

    <div className='container category'>
      <div> <b>{movie.Genre}</b> </div>
      <div className='movies'>
        <div className='movieName'>
          <b>{movie.Title} </b> 
        </div> 
      </div>
    </div>
  </div> 
  
}

export default Main; 