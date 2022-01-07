import React, { useContext, useEffect, useState } from "react"
import { goToDetailsPage, goToHomePage } from "../../routes/coordinator"
import {
  BackToTopButton,
  BackToTopIcon,
  ButtonsWrap,
  CardsContainer,
  EmptyList,
  GeneralContainer,
  HomeIcon,
  HomeIconButton,
} from "./FavoritesPage.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import Header from "../../components/Header/Header"

const FavoritesPage = () => {
  const { favorites } = useContext(GlobalStateContext)
  const [scrollStatus, setScrollStatus] = useState(false)
  const history = useHistory()

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollStatus(true)
    } else {
      setScrollStatus(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  const favoriteCards =
    favorites &&
    favorites.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.imdbID}
          clickCard={() => onClickCard(movie.imdbID)}
        />
      )
    })

  return (
    <GeneralContainer>
      <Header placeholder="Search movies ..." />
      {favorites && favorites.length > 0 ? (
        <>
          <CardsContainer>{favoriteCards}</CardsContainer>

          <ButtonsWrap scrollStatus={scrollStatus}>
            <HomeIconButton onClick={() => goToHomePage(history)}>
              <HomeIcon />
            </HomeIconButton>
            <BackToTopButton onClick={scrollToTop}>
              <BackToTopIcon />
            </BackToTopButton>
          </ButtonsWrap>
        </>
      ) : (
        <EmptyList>
          <h3>Your Favorites list is empty</h3>
          <p>Never miss a movie or show.</p>
          <p>Use your Favorites list to track what you want to see.</p>
        </EmptyList>
      )}
    </GeneralContainer>
  )
}

export default FavoritesPage
