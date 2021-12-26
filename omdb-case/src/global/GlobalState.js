import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { API_KEY } from "../constants/apikey"
import GlobalStateContext from "./GlobalStateContext"
// import { useParams } from 'react-router-dom'
// import Loading from '../../components/Loading/Loading';

const GlobalState = (props) => {
  const [movies, setMovies] = useState([])
  const [movieDetails, setMovieDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  //   const params = useParams()

  console.log("DETALHES", movieDetails)

  const getMovies = (searchTitle) => {
    axios
      .get(
        `${BASE_URL}/?s=${searchTitle}&page=1&apikey=${API_KEY}`
      )
      .then((res) => {
        setMovies(res.data.Search)
        // if(res.data.Response === "True") displayMovieTitle(res.data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMovies("spider")
  }, [])

  useEffect(() => {
    const newList = []
      movies.forEach((item) => {
        setIsLoading(true)
        axios
            .get(`${BASE_URL}/?i=${item.imdbID}&plot=full&apikey=${API_KEY}`)
            .then((res) => {
              newList.push(res.data)
              if(newList.length === 10){
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

  const data = { movies, setMovies, movieDetails, setMovieDetails, isLoading, setIsLoading }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState