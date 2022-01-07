import styled from "styled-components"

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
  align-items: center;
`

export const HomeBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  height: 100%;

  @media screen and (max-width: 480px) {
    height: 1070px;
    margin-top: 1em;
    flex-direction: column-reverse;
  }
`

export const TextWrapper = styled.div`
  h1 {
    margin: 0 1em;
    margin-bottom: 0.5em;
    line-height: 1em;
    font-weight: 700;
    text-align: center;
    font-size: 2.1rem;

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  p {
    margin: 0;
    font-weight: 400;
    color: #7b8c98;
    font-size: 1.4rem;
    text-align: center;

    @media screen and (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
  align-items: center;
`

export const SearchErrorMessage = styled.p`
  font-weight: 500;
  color: #7b8c98;
  font-size: 2.1rem;
  text-align: center;
  margin: 5em 1em;
  line-height: 1.5em;
  transition: all 2s;
  animation: animateThumb 2s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 1em 2em;
    font-size: 1.7rem;
  }
`
