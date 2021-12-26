import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { API_KEY } from "../constants/apikey"
import GlobalStateContext from "./GlobalStateContext"
// import { useParams } from 'react-router-dom'
// import Loading from '../../components/Loading/Loading';

const GlobalState = (props) => {
  const [movies, setMovies] = useState([])
  const [movieList, setMovieList] = useState([])
  const [concursoId, setConcursoId] = useState("")
  // const [movieDetails, setMovieDetails] = useState({})
  // const [isLoading, setIsLoading] = useState(false)
  //   const params = useParams()

  const getMovies = (searchTitle) => {
    axios
      .get(
        `${BASE_URL}/?s=${searchTitle}&page=1&apikey=${API_KEY}`
        // `${BASE_URL}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}&page=1`
        // https://www.omdbapi.com/?s=spider&page=2&apikey=10e66ce1
      )
      .then((res) => {
        setMovies(res.data.Search)
        if (movies) {
          console.log("ID", res.data.Search[0].imdbID)
          setConcursoId(res.data.Search.imdbID)
        }
        // console.log(res.data)
        if (res.data.Response === "True") console.log(res.data.Search)
        // if(res.data.Response === "True") displayMovieTitle(res.data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMovies("lord of the rings")
  }, [])

  useEffect(() => {
    const newList = []
      movies.forEach((item) => {
        setMovieList(item.imdbID)
        console.log("NEW LIST", movieList)
      })
  }, [movies])



  const getIMDBRating = (imdbID) => {
    // http://www.omdbapi.com/?i=tt0167261&plot=full
    axios
      .get(`${BASE_URL}/?i=${imdbID}&plot=full&apikey=${API_KEY}`)
      .then((res) => {
        console.log("IMDB RATING", res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (concursoId) getIMDBRating(concursoId)
  }, [concursoId])

  const data = { movies, setMovies }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
