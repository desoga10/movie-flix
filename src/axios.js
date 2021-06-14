import axios from 'axios';

// Base URL to make requests to the movie Database

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3'
})

export default instance