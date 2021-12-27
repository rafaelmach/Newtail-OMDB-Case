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

  
  const movieCards =
  movieDetails && movieDetails.length === 10 &&
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
