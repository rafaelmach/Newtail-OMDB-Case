import React, { useState } from "react"
import {
  CardImage,
  CardVote,
  MovieCardContainer,
  MovieTitle,
  RegularHeartIcon,
  Released,
} from "./MovieCard.styles"
import noCardImage from "../../images/no_image.jpg"

const MovieCard = ({ cardInfo, clickCard }) => {
  const [hoverCard, sethoverCard] = useState(false)

  const onHover = () => {
    sethoverCard(!hoverCard)
  }

  const LikeButton = () => {
    console.log("CLICOU NO LIKE")
  }

  return (
    <MovieCardContainer onMouseEnter={onHover} onMouseLeave={onHover}>
      <CardImage
        onClick={clickCard}
        src={cardInfo.Poster === "N/A" ? noCardImage : cardInfo.Poster}
        alt="Movie Poster"
      />

      {hoverCard ? null : <CardVote>{cardInfo.imdbRating}</CardVote>}

      <MovieTitle hoverCard={hoverCard}> {cardInfo.Title} </MovieTitle>
      <Released hoverCard={hoverCard}> {cardInfo.Year} </Released>

      <RegularHeartIcon
        hoverCard={hoverCard}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        onClick={LikeButton}
      />
    </MovieCardContainer>
  )
}

export default MovieCard

{
  /* <DetailsIcon alt="details-icon" hoverCard={hoverCard}/> */
}
