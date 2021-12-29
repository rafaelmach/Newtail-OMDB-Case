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

const MovieCard = ({ cardInfo, clickCard }) => {
  // const [hoverCard, sethoverCard] = useState(false)

  // const onHover = () => {
  //   sethoverCard(!hoverCard)
  // }

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
      <Released onClick={clickCard}> {cardInfo.Year} </Released>

      <RegularHeartIcon onClick={LikeButton} />
      <FilledHeartIcon onClick={LikeButton} />
      <DetailsIcon onClick={clickCard} />
    </MovieCardContainer>
  )
}

export default MovieCard

