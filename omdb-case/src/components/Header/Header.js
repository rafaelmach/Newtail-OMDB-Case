import { useState, useEffect, useRef, useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { SearchBarContainer, SearchIcon, SearchBarWrapper, GeneralContainer, Logo, FavoritesIcon, FavoritesButton, FavoritesText, LogoPlayIcon } from "./Header.styles"
import LogoImg from "../../images/movies_central_logo.png"
import LogoIcon from "../../images/logo_play.png"
import { useHistory } from "react-router"
import { goToHomePage } from "../../routes/coordinator"

const SearchBar = ({ placeholder }) => {
  const [state, setState] = useState("")
  const initial = useRef(true)
  const { setSearchTerm } =
    useContext(GlobalStateContext)
    const history = useHistory()

  useEffect(() => {
    let searchTime = 700
    if (initial.current) {
      initial.current = false
      return
    }
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, searchTime)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <GeneralContainer>
      <Logo src={LogoImg} alt="Movies Central Logo"  onClick={() => goToHomePage(history)}
              />
      <LogoPlayIcon src={LogoIcon} alt ="Movies Central Logo Icon" onClick={() => goToHomePage(history)} />
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchIcon alt="search-icon" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </SearchBarWrapper>
    </SearchBarContainer>
    <FavoritesButton>
      <FavoritesIcon />
      <FavoritesText> Favorites </FavoritesText>
    </FavoritesButton>
    </GeneralContainer>
  )
}

export default SearchBar
