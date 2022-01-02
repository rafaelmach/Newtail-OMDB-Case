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
  const { searchTerm } =
    useContext(GlobalStateContext)

  const LikeButton = () => {
    console.log("CLICOU NO LIKE")
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
      <Released onClick={clickCard} searchStatus={searchTerm}> {cardInfo.Year} </Released>

      <RegularHeartIcon onClick={LikeButton} />
      <FilledHeartIcon onClick={LikeButton} />
      <DetailsIcon onClick={clickCard} />
    </MovieCardContainer>
  )
}

export default MovieCard

