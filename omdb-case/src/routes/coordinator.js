export const goBack = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToDetailsPage = (history, id) => {
    history.push(`/details/${id}`)
}

export const goToFavoritesPage = (history) => {
    history.push("/favorites")
}

