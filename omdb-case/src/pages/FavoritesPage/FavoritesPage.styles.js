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
  transition: all 0.5s;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 7em;
  max-width: 450px;
  height: 100%;

  transition: all 0.5s;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h3 {
    line-height: 1em;
    font-weight: 700;
    font-size: 2.1rem;
    margin: 0.5em;
  }

  p {
    line-height: 1.2em;
    font-weight: 400;
    font-size: 1.5rem;
    color: #7b8c98;
    text-align: center;
    margin: 0.1em;
  }

    @media screen and (max-width: 500px) {
      max-width: none;

      h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }
  }

  
`


