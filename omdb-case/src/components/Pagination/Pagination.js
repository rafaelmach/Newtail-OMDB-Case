import React, { useContext } from "react"
import GlobalStateContext from '../../global/GlobalStateContext';
import { ButtonsContainer, PaginationButton } from './Pagination.styles';

const Pagination = () => {

  const { currentPage, setCurrentPage, movieDetails } =
    useContext(GlobalStateContext)

  

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const nextPage = () => {
    if (Number(currentPage) < 500) {
      setCurrentPage((Number(currentPage) + 1).toString())
      scrollToTop()
    }
  }

  const previousPage = () => {
    if (Number(currentPage) > 1) {
      setCurrentPage((Number(currentPage) - 1).toString())
      scrollToTop()
    }
  }

  const firstPage = () => {
    if (Number(currentPage) > 1) {
      setCurrentPage("1")
      scrollToTop()
    }
  }

  console.log("PAGINATION PAGE", currentPage)

  return (
    <div>
      {
        currentPage == 1 ?
          <ButtonsContainer>
            <PaginationButton onClick={() => nextPage()}>Próxima Página</PaginationButton>
          </ButtonsContainer> :
          <ButtonsContainer>
            <PaginationButton onClick={() => firstPage()}>Primeira Página</PaginationButton>
            <PaginationButton onClick={() => previousPage()}>Página Anterior</PaginationButton>
            <PaginationButton onClick={() => nextPage()}>Próxima Página</PaginationButton>
          </ButtonsContainer>
      }
    </div>
  )
}

export default Pagination
