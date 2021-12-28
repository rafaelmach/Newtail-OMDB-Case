import React, { useState } from "react"
import { CardImage, CardVisible, CardVote, DetailsIcon, MovieCardContainer } from "./MovieCard.styles"
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
      > <DetailsIcon alt="details-icon" hoverCard={hoverCard}/> </CardImage>
      {hoverCard ? null : <CardVote>{cardInfo.imdbRating}</CardVote>}
      
    </MovieCardContainer>
  )
}

export default MovieCard
