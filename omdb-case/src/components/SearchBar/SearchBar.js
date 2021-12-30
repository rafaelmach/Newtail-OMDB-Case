import { useState, useEffect, useRef, useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Wrapper, SearchIcon, Content, GeneralContainer, Logo, FavoritesIcon, FavoritesButton, FavoritesText } from "./SearchBar.styles"
import LogoImg from "../../images/movies_central_logo.png"


const SearchBar = ({ placeholder }) => {
  const [state, setState] = useState("")
  const initial = useRef(true)
  const { setSearchTerm } =
    useContext(GlobalStateContext)

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
      <Logo src={LogoImg} alt="Movies Central Logo" />
    <Wrapper>
      <Content>
        <SearchIcon alt="search-icon" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
    <FavoritesButton>
      <FavoritesIcon />
      <FavoritesText> Favorites </FavoritesText>
    </FavoritesButton>
    </GeneralContainer>
  )
}

export default SearchBar
