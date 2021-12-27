import React, { useContext } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { CardsContainer, GeneralContainer, HomeBackground, ImagesWrapper, PosterImg1, PosterImg2 } from "./Home.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import SearchBar from "../../components/SearchBar/SearchBar"
import posterImg1 from "../../images/interstellar_poster.jpg"
import posterImg2 from "../../images/rounders_poster.jpg"

const Home = () => {
  const { movieDetails, searchTerm } = useContext(GlobalStateContext)

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
    <HomeBackground>
      <ImagesWrapper>
      <PosterImg1 src={posterImg1} />
      <PosterImg2 src={posterImg2} />
      </ImagesWrapper>
      <h1>Don't know what to search?</h1>
      <p>Here's an offer you can't refuse</p>
    </HomeBackground>
  <CardsContainer>
      
    {movieCards}
    </CardsContainer>
    </GeneralContainer>
  )
}

export default Home
