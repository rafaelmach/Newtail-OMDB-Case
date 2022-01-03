import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import {
  GeneralContainer,
  InfoContainer,
  MoviePoster,
  Overview,
  MainTitle,
  GenderWrap,
  DateRunTimeWrapper,
  BackButton,
  RunTime,
  ReleaseYear,
  Rated,
  RatingsContainer,
  IMDbWrapper,
  ImdbLogo,
  ImdbRating,
} from "./DetailsPage.styles"
import { goBack } from "../../routes/coordinator"
import Loading from "../../components/Loading/Loading"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useParams } from "react-router-dom"
import imdbLogo from "../../images/imdb_svg.svg"

const DetailsPage = () => {
  const { movieDetails, isLoading, homeMovies, favorites } =
    useContext(GlobalStateContext)
  const [selectedMovie, setSelectedMovie] = useState({})
  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    if (movieDetails.length > 0) {
      const currentMovie = movieDetails.find((item) => {
        return item.imdbID === params.id
      })
      setSelectedMovie(currentMovie)
      console.log("1--", currentMovie)
      if (currentMovie === undefined) {
        const currentMovie = favorites.find((item) => {
          return item.imdbID === params.id
        })
        setSelectedMovie(currentMovie)
        console.log("4--", currentMovie)
      }
    } else {
      const currentMovie = homeMovies.find((item) => {
        return item.imdbID === params.id
      })
      setSelectedMovie(currentMovie)
      console.log("2--", currentMovie)
      if (currentMovie === undefined) {
        const currentMovie = favorites.find((item) => {
          return item.imdbID === params.id
        })
        setSelectedMovie(currentMovie)
        console.log("3--", currentMovie)
      }
    }
  }, [])

  const movieGenres =
    selectedMovie && selectedMovie.Genre && selectedMovie.Genre?.split(",")

  console.log("ARRAY", selectedMovie && selectedMovie.Ratings && selectedMovie.Ratings[0].Value)

  return (
    <GeneralContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <InfoContainer>
            <BackButton
              onClick={() => goBack(history)}
              aria-label="Botão para Voltar"
            />
            <DateRunTimeWrapper>
              <RunTime>{selectedMovie && selectedMovie.Runtime}</RunTime>{" "}
              <p> • </p>
              <ReleaseYear>
                {selectedMovie && selectedMovie.Year}
              </ReleaseYear>{" "}
              <p> • </p>
              <Rated> {selectedMovie && selectedMovie.Rated} </Rated>
            </DateRunTimeWrapper>
            <MainTitle>{selectedMovie && selectedMovie.Title}</MainTitle>
            <RatingsContainer>
              <IMDbWrapper>
                <ImdbLogo src={imdbLogo} />
                <ImdbRating>{selectedMovie && selectedMovie.Ratings && selectedMovie.Ratings[0].Value}</ImdbRating>
              </IMDbWrapper>
            </RatingsContainer>
            <Overview>{selectedMovie && selectedMovie.Plot}</Overview>
            <p>
              Avaliação do TMDB: ⭐{" "}
              <strong>{selectedMovie && selectedMovie.imdbRating}</strong>
            </p>
            <p>Arrecadação: {selectedMovie && selectedMovie.BoxOffice}</p>
            <GenderWrap>
              {movieGenres &&
                movieGenres.map((item) => <p key={item}>{item.trim()}</p>)}
            </GenderWrap>
          </InfoContainer>
          <MoviePoster src={`${selectedMovie && selectedMovie.Poster}`} />
        </>
      )}
    </GeneralContainer>
  )
}

export default DetailsPage
