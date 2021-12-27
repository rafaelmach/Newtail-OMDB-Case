import React, { useContext } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { CardsContainer, GeneralContainer } from "./Home.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import SearchBar from "../../components/SearchBar/SearchBar"

const Home = () => {
  const { movieDetails } = useContext(GlobalStateContext)

  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  // const movieSearchBox = document.getElementById("movie-search-box")
  // const searchList = document.getElementById("search-list")
  // const resultGrid = document.getElementById("result-grid")

  // const findMovies = () => {
  //   let searchTitle = (movieSearchBox.value).trim()
  // }


  // const displayMovieTitle = (movies) => {
    
  // }
  



  const movieCards =
    movieDetails &&
    movieDetails.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.imdbID}
          onClick={() => onClickCard(movie.imdbID)}
        />
      )
    })

  return (
  <GeneralContainer>
    <SearchBar placeholder="Search movies ..."/>
  <CardsContainer>
      
    {movieCards}
    </CardsContainer>
    </GeneralContainer>
  )
}

export default Home
