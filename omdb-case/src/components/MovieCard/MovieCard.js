import React, { useState } from "react"
import {
  CardImage,
  CardVote,
  MovieCardContainer,
  MovieTitle,
  Released,
} from "./MovieCard.styles"
import noCardImage from "../../images/no_image.jpg"

const MovieCard = ({ cardInfo, onClick }) => {
  const [hoverCard, sethoverCard] = useState(false)

  const onHover = () => {
    sethoverCard(!hoverCard)
  }

  return (
    <MovieCardContainer
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <CardImage
        src={cardInfo.Poster === "N/A" ? noCardImage : cardInfo.Poster}
        alt="Movie Poster"
      />

      {hoverCard ? null : <CardVote>{cardInfo.imdbRating}</CardVote>}

      <MovieTitle hoverCard={hoverCard}> {cardInfo.Title} </MovieTitle>
      <Released hoverCard={hoverCard}> {cardInfo.Year} </Released>
    </MovieCardContainer>
  )
}

export default MovieCard

{
  /* <DetailsIcon alt="details-icon" hoverCard={hoverCard}/> */
}
