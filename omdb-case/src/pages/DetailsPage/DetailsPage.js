import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import {
  GeneralContainer,
  InfoContainer,
  MoviePoster,
  Overview,
  MainTitle,
  GenreWrap,
  DateRunTimeWrapper,
  BackButton,
  RunTime,
  ReleaseYear,
  Rated,
  RatingsContainer,
  IMDbWrapper,
  ImdbLogo,
  ImdbRating,
  RTomatoesWrapper,
  RTomatoesLogo,
  RTomatoesRating,
  LikeButtonWrapper,
  FillHeartIcon,
  RegHeartIcon,
  LikeButtonText,
  PlotTitle,
  CastGenreDirectorContainer,
  CastWrap,
  DirectorWrap,
} from "./DetailsPage.styles"
import { goBack } from "../../routes/coordinator"
import Loading from "../../components/Loading/Loading"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useParams } from "react-router-dom"
import imdbLogo from "../../images/imdb_svg.svg"
import tomatoesLogo from "../../images/tomatoes_svg.svg"

const DetailsPage = () => {
  const { movieDetails, isLoading, homeMovies, favorites, setFavorites } =
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

  

  const addToFavorites = () => {
    const newFavoriteList = [...favorites, selectedMovie]
    setFavorites(newFavoriteList)
  }

  const removeFromFavorites = () => {
    const movieIndex = favorites.findIndex(
      (item) => item.imdbID === selectedMovie.imdbID
    )
    const newFavoriteList = [...favorites]
    newFavoriteList.splice(movieIndex, 1)

    setFavorites(newFavoriteList)
  }

  const movieGenres =
    selectedMovie && selectedMovie.Genre && selectedMovie.Genre?.split(",")

    const movieCast =
    selectedMovie && selectedMovie.Actors && selectedMovie.Actors?.split(",")  

    const movieDirector =
    selectedMovie && selectedMovie.Director && selectedMovie.Director?.split(",") 


  const inFavorites = favorites && favorites.find((item) => item.imdbID === params.id) ? true : false

  // console.log("ARRAY RATINGS", selectedMovie && selectedMovie.Ratings && selectedMovie.Ratings[0].Value)
  console.log("SELECTED MOVIE", selectedMovie && selectedMovie)
  console.log(inFavorites)

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
                <ImdbRating>
                  {selectedMovie &&
                    selectedMovie.Ratings &&
                    selectedMovie.Ratings[0].Value}
                </ImdbRating>
              </IMDbWrapper>
              <RTomatoesWrapper>
                <RTomatoesLogo src={tomatoesLogo} />
                <RTomatoesRating>
                  {selectedMovie &&
                  selectedMovie.Ratings &&
                  selectedMovie.Ratings[1]
                    ? selectedMovie.Ratings[1].Value
                    : "N/A"}{" "}
                </RTomatoesRating>
              </RTomatoesWrapper>

              <LikeButtonWrapper inFavorites={inFavorites} onClick={inFavorites ? removeFromFavorites : addToFavorites}>
              {inFavorites ? (
        <FillHeartIcon />
      ) : (
        <RegHeartIcon />
      )}
                
                <LikeButtonText>
                  {inFavorites ? "Remove movie" : "Add to favorites"}
                </LikeButtonText>
              </LikeButtonWrapper>
            </RatingsContainer>
            <PlotTitle>Plot</PlotTitle>
            <Overview>{selectedMovie && selectedMovie.Plot}</Overview>
            <CastGenreDirectorContainer>
            <CastWrap>
              <h3> Cast </h3>
              {movieCast &&
                movieCast.map((item) => <p key={item}>{item.trim()}</p>)}
            </CastWrap>
            <GenreWrap>
            <h3> Genre </h3>
              {movieGenres &&
                movieGenres.map((item) => <p key={item}>{item.trim()}</p>)}
            </GenreWrap>
            <DirectorWrap>
            <h3> Director </h3>
              {movieDirector &&
                movieDirector.map((item) => <p key={item}>{item.trim()}</p>)}
            </DirectorWrap>
            </CastGenreDirectorContainer>
            
          </InfoContainer>
          <MoviePoster src={`${selectedMovie && selectedMovie.Poster}`} />
        </>
      )}
    </GeneralContainer>
  )
}

export default DetailsPage
