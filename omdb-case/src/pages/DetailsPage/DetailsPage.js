import { useContext } from 'react'
import { useHistory } from "react-router";
import { GeneralContainer, InfoContainer, MoviePoster, Overview, MainTitle, OriginalTitle, GenderWrap, DateRunTime, BackButton } from './DetailsPage.styles'
import { goBack } from '../../routes/coordinator';
import Loading from '../../components/Loading/Loading';
import GlobalStateContext from '../../global/GlobalStateContext';


const DetailsPage = () => {
    const history = useHistory()

    const { movieDetails, isLoading } = useContext(GlobalStateContext)

    // const getDetails = () => {
    //     setIsLoading(true)
    //     axios.get(`${BASE_URL}/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}`)
    //     .then((res) => {
    //         setMovie(res.data)
    //         setIsLoading(false)
    //     })
    //     .catch((error) => {
    //         setIsLoading(false)
    //         console.log(error)
    //     })
    // }

    const revenue = movieDetails && movieDetails.BoxOffice
    const BoxOfficeDollar = revenue && revenue.toLocaleString("pt-BR", {style: "currency", currency: "USD"})
    
    // const movieGenres = movie.genres


    // const ConvertedTime = () => {
    //     const runtime = movie && movie.runtime
    //     const hours = Math.floor(runtime / 60);          
    //     const minutes = runtime % 60;

    //     return `${hours} h ${minutes} min`
    // }

    return (
        <GeneralContainer>
            {
                isLoading ? <Loading />
                : 
            <><InfoContainer>
                        <MainTitle>
                            {movieDetails.Title}
                        </MainTitle>
                        <OriginalTitle>Título original: {movieDetails.Title}</OriginalTitle>
                        <DateRunTime>
                            <p>{movieDetails.Year}</p>
                            <p>{movieDetails.Runtime}</p>
                        </DateRunTime>

                        <Overview>{movieDetails.Plot}</Overview>
                        <p>Avaliação do TMDB: ⭐ <strong>{movieDetails.imdbRating}</strong></p>
                        <p>Arrecadação: {BoxOfficeDollar}</p>
                        <GenderWrap>
                            {movieGenres && movieGenres.map((item) => <p key={item.id}>{item.name}</p>

                            )}
                        </GenderWrap>
                        <BackButton onClick={() => goBack(history)} aria-label="Botão para Voltar" />

                    </InfoContainer>
                    <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></>
            }    
        </GeneralContainer>
    )
}

export default DetailsPage
