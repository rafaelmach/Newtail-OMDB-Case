import React, { useState, useEffect } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { MainContainer } from "./Home.styles"
// import { LANGUAGE } from "../../constants/language"
import { API_KEY, BASE_URL } from "../../constants/urls"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import axios from "axios"

const Home = () => {
  const [data, setData] = useState([])
  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  const movieSearchBox = document.getElementById("movie-search-box")
  const searchList = document.getElementById("search-list")
  const resultGrid = document.getElementById("result-grid")

  const getMovies = (searchTitle) => {
    axios
      .get(
        `${BASE_URL}/?s=${searchTitle}&page=1&apikey=${API_KEY}`
        // `${BASE_URL}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}&page=1`
        // https://www.omdbapi.com/?s=spider&page=2&apikey=10e66ce1
      )
      .then((res) => {
        setData(res.data.Search)
        // console.log(res.data)
        // if(res.data.Response === "True") console.log(res.data.Search)
        if(res.data.Response === "True") displayMovieTitle(res.data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const findMovies = () => {
    let searchTitle = (movieSearchBox.value).trim()
  }


  const displayMovieTitle = (movies) => {
    
  }
  

  useEffect(() => {
    getMovies("lord of the rings")
  }, [])

  const movieCards =
    data &&
    data.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.id}
          onClick={() => onClickCard(movie.id)}
        />
      )
    })

  return <MainContainer>{movieCards}</MainContainer>
}

export default Home
