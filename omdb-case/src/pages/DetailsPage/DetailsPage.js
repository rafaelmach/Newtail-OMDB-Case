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
  const { movieDetails, isLoading } = useContext(GlobalStateContext)
  const [selectedMovie, setSelectedMovie] = useState({})
  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    const currentMovie = movieDetails.find((item) => {
      return item.imdbID === params.id
    })
    setSelectedMovie(currentMovie)
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
            <MainTitle>{selectedMovie.Title}</MainTitle>
            <OriginalTitle>
              Título original: {selectedMovie.Title}
            </OriginalTitle>
            <DateRunTime>
              <p>{selectedMovie.Year}</p>
              <p>{selectedMovie.Runtime}</p>
            </DateRunTime>

            <Overview>{selectedMovie.Plot}</Overview>
            <p>
              Avaliação do TMDB: ⭐ <strong>{selectedMovie.imdbRating}</strong>
            </p>
            <p>Arrecadação: {selectedMovie.BoxOffice}</p>
            <GenderWrap>
              {movieGenres &&
                movieGenres.map((item) => <p key={item}>{item.trim()}</p>)}
            </GenderWrap>
            <BackButton
              onClick={() => goBack(history)}
              aria-label="Botão para Voltar"
            />
          </InfoContainer>
          <MoviePoster src={`${selectedMovie.Poster}`} />
        </>
      )}
    </GeneralContainer>
  )
}

export default DetailsPage
