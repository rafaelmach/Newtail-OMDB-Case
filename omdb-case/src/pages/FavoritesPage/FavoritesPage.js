import React, { useContext, useEffect, useState } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { CardsContainer, GeneralContainer } from "./FavoritesPage.styles"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import Header from "../../components/Header/Header"

const FavoritesPage = () => {
  const { favorites } = useContext(GlobalStateContext)
  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
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
      <Header />
      <CardsContainer>{favoriteCards}</CardsContainer>
    </GeneralContainer>
  )
}

export default FavoritesPage
