import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { API_KEY } from "../constants/apikey"
import GlobalStateContext from "./GlobalStateContext"
import { homeMoviesId } from "../constants/homeMoviesId"

const GlobalState = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [movieDetails, setMovieDetails] = useState([])
  const [homeMovies, setHomeMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getMovies = (searchTitle) => {
    axios
      .get(`${BASE_URL}/?s=${searchTitle}&page=1&apikey=${API_KEY}`)
      .then((res) => {
        if (res.data.Response === "True") setMovies(res.data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setMovies([])
    setMovieDetails([])
    getMovies(searchTerm)
    
  }, [searchTerm])

  useEffect(() => {
    const newList = []
    movies &&
      movies.forEach((item) => {
        setIsLoading(true)
        axios
          .get(`${BASE_URL}/?i=${item.imdbID}&plot=full&apikey=${API_KEY}`)
          .then((res) => {
            newList.push(res.data)
            if (newList.length === 10) {
              const orderedList = newList.sort((b, a) => {
                return a.Year - b.Year
              })
              setMovieDetails(orderedList)
              setIsLoading(false)
            }
          })
          .catch((error) => {
            setIsLoading(false)
            console.log(error)
          })
      })
  }, [movies])

  // INÍCIO DO CÓDIGO 3a REQUISIÇÃO ... 2 cards da HomePage
  // Um objeto contendo os 2 Id's [ Interstelar + Private Ryan ] ... aí eu faço um forEach nesse Objeto
  // ... pra cada item desse Array eu vou fazer uma requisição e dar um homeMovieList.push(res.data)
  // Vou ter uma lista salva na const homeMovieList ... aí é só dar um setHomeMovies e vou ter os dados
  // dos 2 filmes salvos no estado ... na variável HomeMovies

  useEffect(() => {
    const homeMovieList = []
    homeMoviesId &&
      homeMoviesId.forEach((item) => {
        setIsLoading(true)
        axios
          .get(`${BASE_URL}/?i=${item.movieId}&plot=full&apikey=${API_KEY}`)
          .then((res) => {
            homeMovieList.push(res.data)
            // setMovieDetails([])
            setHomeMovies(homeMovieList)
            setIsLoading(false)
          })
          .catch((error) => {
            setIsLoading(false)
            console.log(error)
          })
      })
  }, [])

  const data = {
    movies,
    setMovies,
    movieDetails,
    setMovieDetails,
    isLoading,
    setIsLoading,
    searchTerm,
    setSearchTerm,
    homeMovies,
    setHomeMovies,
    favorites,
    setFavorites
  }

  console.log("MOVIES", movies)
  console.log("DETAILS", movieDetails)
  console.log("2 FILMES", homeMovies)

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
