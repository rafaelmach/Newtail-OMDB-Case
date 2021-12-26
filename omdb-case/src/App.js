import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from './App.styles'
import Loading from './components/Loading/Loading'
import GlobalState from './global/GlobalState'
import Router from './routes/Router'


const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)
}, [])

  return (
    <GlobalState>
    <AppContainer>
    {
      isLoading ? <Loading />
      :
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    }
    </AppContainer>
    </GlobalState>
  )
}

export default App
