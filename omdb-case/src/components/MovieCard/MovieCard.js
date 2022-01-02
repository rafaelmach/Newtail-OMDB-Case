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
  // !!!!!!!!!!!!! >>>>>>>>>  DELETAR { searchTerm } = useContext
  const { searchTerm, favorites, setFavorites } =
    useContext(GlobalStateContext)

  const AddToFavorites = () => {
    const newFavoriteList = [...favorites, cardInfo]
    setFavorites(newFavoriteList)
  }

  const RemoveFromFavorites = () => {
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
      <Released onClick={clickCard} searchStatus={searchTerm}>
        {" "}
        {cardInfo.Year}{" "}
      </Released>
      {favorites && favorites.find((item) => item.imdbID === cardInfo.imdbID) ? (
        <FilledHeartIcon onClick={RemoveFromFavorites} />
      ) : (
        <RegularHeartIcon onClick={AddToFavorites} />
      )}

      <DetailsIcon onClick={clickCard} />
    </MovieCardContainer>
  )
}

export default MovieCard
