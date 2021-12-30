import React, { useContext, useEffect, useState, useRef } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import {
  CardsContainer,
  GeneralContainer,
  HomeBackground,
  ImagesWrapper,
  PosterImg1,
  PosterImg2,
  SearchErrorMessage,
} from "./Home.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import SearchBar from "../../components/Header/Header"
import posterImg1 from "../../images/interstellar_poster.jpg"
import posterImg2 from "../../images/saving_private_ryan_poster.jpg"

const Home = () => {
  const [searchError, setsearchError] = useState("")
  const { movieDetails, searchTerm, setSearchTerm } =
    useContext(GlobalStateContext)
  const initial = useRef(true)
  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  const movieCards =
    movieDetails &&
    movieDetails.length === 10 &&
    movieDetails.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.imdbID}
          clickCard={() => onClickCard(movie.imdbID)}
        />
      )
    })

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    let timer = setTimeout(() => {
      setsearchError("Movie title not found! Please search again ...")
    }, 3000)
    setsearchError("")

    return () => clearTimeout(timer)
  }, [setSearchTerm, searchTerm])

  return (
    <GeneralContainer>
      <SearchBar placeholder="Search movies ..." />
      {searchTerm.length === 0 ? (
        <HomeBackground>
          <ImagesWrapper>
            <PosterImg1 src={posterImg1} />
            <PosterImg2 src={posterImg2} />
          </ImagesWrapper>
          <h1>Don't know what to search?</h1>
          <p>Here's an offer you can't refuse</p>
        </HomeBackground>
      ) : (
        <CardsContainer>{movieCards}</CardsContainer>
      )}
      {searchTerm.length > 0 && movieDetails.length === 0 ? (
        <SearchErrorMessage>{searchError}</SearchErrorMessage>
      ) : null}
    </GeneralContainer>
  )
}

export default Home
