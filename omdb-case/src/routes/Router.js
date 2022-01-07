import { Switch, Route } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import ErrorPage from "../pages/Error/ErrorPage"
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage"
import Home from "../pages/Home/Home"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/details/:id">
        <DetailsPage />
      </Route>
      <Route exact path="/favorites">
        <FavoritesPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  )
}

export default Router
