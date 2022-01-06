import { useEffect, useRef, useState } from "react"
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
  const [searchError, setsearchError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState("1")
  const [showModal, setShowModal] = useState(false)
  const [likeMessage, setLikeMessage] = useState("")
  const initial = useRef(true)

  const getMovies = (searchTitle) => {
    axios
      .get(
        `${BASE_URL}/?s=${searchTitle}&page=${currentPage}&apikey=${API_KEY}`
      )
      .then((res) => {
        if (res.data.Response === "True") setMovies(res.data.Search)
        console.log("PAGE DENTRO DO GET", currentPage)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setMovies([])
    setMovieDetails([])
    getMovies(searchTerm)
  }, [searchTerm, currentPage])

  useEffect(() => {
    setCurrentPage("1")
  }, [searchTerm])

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    let timer = setTimeout(() => {
      setsearchError("Movie title not found! Please search again.")
    }, 2000)
    setsearchError("")

    return () => clearTimeout(timer)
  }, [setSearchTerm, searchTerm])

  useEffect(() => {
    const newList = []
    movies &&
      movies.forEach((item) => {
        setIsLoading(true)
        axios
          .get(
            `${BASE_URL}/?i=${item.imdbID}&plot=full&page=2&apikey=${API_KEY}`
          )
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
  }, [movies, currentPage])

  useEffect(() => {
    const homeMovieList = []
    homeMoviesId &&
      homeMoviesId.forEach((item) => {
        setIsLoading(true)
        axios
          .get(`${BASE_URL}/?i=${item.movieId}&plot=full&apikey=${API_KEY}`)
          .then((res) => {
            homeMovieList.push(res.data)
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
    setFavorites,
    searchError,
    currentPage,
    setCurrentPage,
    showModal,
    setShowModal,
    likeMessage,
    setLikeMessage,
  }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
