import React, { useContext } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import {
  CardsContainer,
  EmptyList,
  GeneralContainer,
} from "./FavoritesPage.styles"
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
      <Header placeholder="Search movies ..." />
      {favorites && favorites.length > 0 ? (
        <CardsContainer>{favoriteCards}</CardsContainer>
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
