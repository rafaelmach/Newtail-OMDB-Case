import React, { useContext, useEffect, useState, useRef } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import {
  CardsContainer,
  GeneralContainer,
  HomeBackground,
  ImagesWrapper,
  SearchErrorMessage,
} from "./Home.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import Header from "../../components/Header/Header"

const Home = () => {
  // const [searchError, setsearchError] = useState("")
  const { movieDetails, searchTerm, setSearchTerm, homeMovies, movies, searchError } =
    useContext(GlobalStateContext)
  // const initial = useRef(true)
  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  const movieCards =
    movieDetails &&
    movieDetails.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.imdbID}
          clickCard={() => onClickCard(movie.imdbID)}
        />
      )
    })

  const homePageCards =
    homeMovies &&
    homeMovies.length === 2 &&
    homeMovies.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.imdbID}
          clickCard={() => onClickCard(movie.imdbID)}
        />
      )
    })

  // useEffect(() => {
  //   if (initial.current) {
  //     initial.current = false
  //     return
  //   }
  //   let timer = setTimeout(() => {
  //     setsearchError("Movie title not found! Please search again.")
  //   }, 3000)
  //   setsearchError("")

  //   return () => clearTimeout(timer)
  // }, [setSearchTerm, searchTerm])

  // console.log("TEXTO NA BUSCA", searchTerm)
  return (
    <GeneralContainer>
      <Header placeholder="Search movies ..." />
      {searchTerm.length === 0 ? (
        <HomeBackground>
          <ImagesWrapper>{homePageCards}</ImagesWrapper>
          <h1>Don't know what to search?</h1>
          <p>Here's an offer you can't refuse</p>
        </HomeBackground>
      ) : (
        <CardsContainer>{movieCards}</CardsContainer>
      )}
      {searchTerm.length > 0 && movies.length === 0 ? (
        <SearchErrorMessage>{searchError}</SearchErrorMessage>
      ) : null}
    </GeneralContainer>
  )
}

export default Home
