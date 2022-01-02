import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import {
  GeneralContainer,
  InfoContainer,
  MoviePoster,
  Overview,
  MainTitle,
  OriginalTitle,
  GenderWrap,
  DateRunTime,
  BackButton,
} from "./DetailsPage.styles"
import { goBack } from "../../routes/coordinator"
import Loading from "../../components/Loading/Loading"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useParams } from "react-router-dom"

const DetailsPage = () => {
  const { movieDetails, isLoading, homeMovies, favorites } = useContext(GlobalStateContext)
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
      if(currentMovie === undefined){
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
      if(currentMovie === undefined){
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

  return (
    <GeneralContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <InfoContainer>
            <MainTitle>{selectedMovie && selectedMovie.Title}</MainTitle>
            <OriginalTitle>
              Título original: {selectedMovie && selectedMovie.Title}
            </OriginalTitle>
            <DateRunTime>
              <p>{selectedMovie && selectedMovie.Year}</p>
              <p>{selectedMovie && selectedMovie.Runtime}</p>
            </DateRunTime>

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
            <BackButton
              onClick={() => goBack(history)}
              aria-label="Botão para Voltar"
            />
          </InfoContainer>
          <MoviePoster src={`${selectedMovie && selectedMovie.Poster}`} />
        </>
      )}
    </GeneralContainer>
  )
}

export default DetailsPage
