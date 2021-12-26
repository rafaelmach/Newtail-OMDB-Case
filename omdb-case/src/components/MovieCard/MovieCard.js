import React from 'react'
import { CardImage, CardVote, MovieCardContainer } from './MovieCard.styles'
// import cardImage from "../../images/card_image_test.jpg"


const MovieCard = ({cardInfo, onClick}) => {
    
    return (
        <MovieCardContainer onClick={onClick}>
            <CardImage src={`${cardInfo.Poster}`} />
            <CardVote>
                {cardInfo.vote_average}
            </CardVote>
        </MovieCardContainer>
    )
}

export default MovieCard
