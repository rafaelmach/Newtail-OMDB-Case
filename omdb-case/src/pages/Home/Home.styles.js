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
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PosterImg1 = styled.img`
  border-radius: 10px;
  width: 330px;
  height: 450px;
  margin: 30px;
  box-shadow: rgba(255, 255, 255, 0.19) 0px 10px 20px,
    rgba(255, 255, 255, 0.23) 0px 6px 6px;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 65%;
    justify-content: center;
    margin: 10px;
    max-width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 25px auto;
    max-width: 450px;
  }
`

export const PosterImg2 = styled.img`
  border-radius: 10px;
  width: 330px;
  height: 450px;
  margin: 30px;
  box-shadow: rgba(255, 255, 255, 0.19) 0px 10px 20px,
    rgba(255, 255, 255, 0.23) 0px 6px 6px;

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
  background-color: blue;
  font-weight: 400;
  color: #7b8c98;
  font-size: 1.4em;
  text-align: center;
`
