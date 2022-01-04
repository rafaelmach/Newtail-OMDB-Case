import {
  CardImage,
  CardVote,
  DetailsIcon,
  FilledHeartIcon,
  MovieCardContainer,
  MovieTitle,
  RegularHeartIcon,
  Released,
} from "./MovieCard.styles"
import noCardImage from "../../images/no_image.jpg"
import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"

const MovieCard = ({ cardInfo, clickCard }) => {
  
  const { favorites, setFavorites } =
    useContext(GlobalStateContext)

  const addToFavorites = () => {
    const newFavoriteList = [...favorites, cardInfo]
    setFavorites(newFavoriteList)
  }

  const removeFromFavorites = () => {
    const movieIndex = favorites.findIndex(
      (item) => item.imdbID === cardInfo.imdbID
    )
    const newFavoriteList = [...favorites]
    newFavoriteList.splice(movieIndex, 1)

    setFavorites(newFavoriteList)
  }

  return (
    <MovieCardContainer>
      <CardImage
        onClick={clickCard}
        src={cardInfo.Poster === "N/A" ? noCardImage : cardInfo.Poster}
        alt="Movie Poster"
      />

      <CardVote>{cardInfo.imdbRating}</CardVote>

      <MovieTitle onClick={clickCard}> {cardInfo.Title} </MovieTitle>
      <Released onClick={clickCard} >
        {" "}
        {cardInfo.Year}{" "}
      </Released>
      {favorites && favorites.find((item) => item.imdbID === cardInfo.imdbID) ? (
        <FilledHeartIcon onClick={removeFromFavorites} />
      ) : (
        <RegularHeartIcon onClick={addToFavorites} />
      )}

      <DetailsIcon onClick={clickCard} />
    </MovieCardContainer>
  )
}

export default MovieCard
