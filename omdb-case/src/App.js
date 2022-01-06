import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { AppContainer } from "./App.styles"
import Loading from "./components/Loading/Loading"
import Modal from "./components/Modal/Modal"
import GlobalState from "./global/GlobalState"
import Router from "./routes/Router"

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [scrollStatus, setScrollStatus] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollStatus(true)
    } else {
      setScrollStatus(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  useEffect(() => {
    let number = 1000
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, number)
  }, [])

  return (
    <GlobalState>
      <AppContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Modal scrollStatus={scrollStatus} />
            <Router />
          </BrowserRouter>
        )}
      </AppContainer>
    </GlobalState>
  )
}

export default App
