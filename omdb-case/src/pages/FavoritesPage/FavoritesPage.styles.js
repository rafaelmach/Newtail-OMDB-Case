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
    height: 680px;
    margin-top: 0;
  }

  h1 {
    margin-bottom: 0.5em;
    line-height: 1em;
    font-weight: 700;
    text-align: center;
    /* font-size: 1.7rem; */
  }

  p {
    margin: 0;
    font-weight: 400;
    color: #7b8c98;
    font-size: 1.4em;
    text-align: center;
  }
`

export const ImagesWrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
  align-items: center;
`

export const PosterImg1 = styled.img`
  border-radius: 10px;
  width: 330px;
  height: 450px;
  margin: 30px;
  box-shadow: rgba(255, 255, 255, 0.12) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.32) 0px 2px 16px 0px;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 65%;
    justify-content: center;
    margin: 10px;
    max-width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1em;
    max-width: 450px;
  }
`

export const PosterImg2 = styled.img`
  border-radius: 10px;
  width: 330px;
  height: 450px;
  margin: 30px;
  box-shadow: rgba(255, 255, 255, 0.12) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.32) 0px 2px 16px 0px;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 65%;
    justify-content: center;
    margin: 10px;
    max-width: 450px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const SearchErrorMessage = styled.p`
  font-weight: 500;
  color: #7b8c98;
  font-size: 2.1rem;
  text-align: center;
  margin: 5em 1em;
  line-height: 1.5em;

  @media screen and (max-width: 480px) {
    margin: 1em 2em;
    font-size: 1.7rem;
  }
`
