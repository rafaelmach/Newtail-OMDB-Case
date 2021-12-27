import { useState, useEffect, useRef, useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Wrapper, SearchIcon, Content } from "./SearchBar.styles"


const SearchBar = ({placeholder}) => {
  const [state, setState] = useState("")
  const initial = useRef(true)
  const { setSearchTerm } = useContext(GlobalStateContext)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
      <SearchIcon alt="search-icon" />
        <input 
        type="text" 
        placeholder={placeholder}
        onChange={event => setState(event.currentTarget.value)}
        value={state}
        />
        
      </Content>
    </Wrapper>
  )
}

export default SearchBar
