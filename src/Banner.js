import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './banner.css'

const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)])
      return request
    }
    fetchData()
  }, [])

  // Truncate a String
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}>
      <div className="banner__contents">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 170)}</h1>
      </div>

      <div className="banner--fabeBottom"></div>
    </header>
  )
}

export default Banner
