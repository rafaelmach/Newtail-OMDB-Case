import React, { useContext, useEffect } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import {
  CardsContainer,
  GeneralContainer,
  HomeBackground,
  ImagesWrapper,
  SearchErrorMessage,
  TextWrapper,
} from "./Home.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import Header from "../../components/Header/Header"
import Pagination from "../../components/Pagination/Pagination"
import Loading from "../../components/Loading/Loading"

const Home = () => {
  const {
    movieDetails,
    searchTerm,
    homeMovies,
    movies,
    searchError,
    isLoading,
  } = useContext(GlobalStateContext)
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

    function scrollToTop() {
      window.scrollTo(0, 0)
    }

    useEffect(() => {
      scrollToTop()
    }, [])

  return (
    <GeneralContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header placeholder="Search movies ..." />
          {searchTerm.length === 0 ? (
            <HomeBackground>
              <ImagesWrapper>{homePageCards}</ImagesWrapper>
              <TextWrapper>
                <h1>Don't know what to search?</h1>
                <p>Here's an offer you can't refuse</p>
              </TextWrapper>
            </HomeBackground>
          ) : (
            <CardsContainer>{movieCards}</CardsContainer>
          )}
          {searchTerm.length > 0 && movies.length === 0 ? (
            <SearchErrorMessage>{searchError}</SearchErrorMessage>
          ) : null}
          {movies.length > 0 ? <Pagination /> : null}
        </>
      )}
    </GeneralContainer>
  )
}

export default Home
