import React from 'react'
import { CardImage, CardVote, MovieCardContainer } from './MovieCard.styles'

const MovieCard = ({cardInfo, onClick}) => {
    
    return (
        <MovieCardContainer onClick={onClick}>
            <CardImage src={`${cardInfo.Poster}`} />
            <CardVote>
                {cardInfo.imdbRating}
            </CardVote>
        </MovieCardContainer>
    )
}

export default MovieCard
