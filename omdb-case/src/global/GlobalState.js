import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { API_KEY } from "../constants/apikey"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [movieDetails, setMovieDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getMovies = (searchTitle) => {
    axios
      .get(
        `${BASE_URL}/?s=${searchTitle}&page=1&apikey=${API_KEY}`
      )
      .then((res) => {
        if(res.data.Response === "True") setMovies(res.data.Search)
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
        movies && movies.forEach((item) => {
        // setIsLoading(true)
        axios
            .get(`${BASE_URL}/?i=${item.imdbID}&plot=full&apikey=${API_KEY}`)
            .then((res) => {
              newList.push(res.data)
              if(newList.length === 10){
                const orderedList = newList.sort((b, a) => {
                  return a.Year - b.Year
                })
                setMovieDetails(orderedList)
                // setIsLoading(false)
              }
            })
            .catch((error) => {
              // setIsLoading(false)
              console.log(error)
            }) 
      })
  }, [movies])

  const data = { movies, setMovies, movieDetails, setMovieDetails, isLoading, setIsLoading, setSearchTerm }

  console.log("MOVIES", movies)
  console.log("DETAILS", movieDetails)

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
