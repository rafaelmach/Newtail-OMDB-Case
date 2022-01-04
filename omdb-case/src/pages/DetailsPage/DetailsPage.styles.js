import styled from "styled-components"
import { BsArrowLeft } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

export const GeneralContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
  transition: all 0.7s;
  animation: animateThumb 0.7s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    height: 100%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
  justify-content: center;
  /* background-color: #313131; */
  border: 1px solid white;
  border-radius: 10px;
  margin-right: 30px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media screen and (max-width: 800px) {
    margin: 10px;
  }
`

export const MainTitle = styled.div`
  line-height: 1.1em;
  font-weight: 500;
  font-size: 3rem;

  @media screen and (max-width: 815px) {
    line-height: 1.2em;
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    line-height: 1.2em;
    font-size: 1.7rem;
  }
`

export const RatingsContainer = styled.div`
  display: flex;
  margin: 1em 0;
  flex-wrap: wrap;
`

export const IMDbWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  width: 145px;
  height: 42px;
  border: 1px solid #171c21;
  border-radius: 4px;
  letter-spacing: 1px;
  margin-right: 1em;
`

export const ImdbLogo = styled.img`
  width: 50px;
  padding: 11px;
  background: #ff9b39;
  border-radius: 4px 0px 0px 4px;
  display: flex;
  justify-content: left;
`

export const ImdbRating = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`

export const RTomatoesWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  width: 115px;
  height: 42px;
  border: 1px solid #171c21;
  border-radius: 4px;
  letter-spacing: 1px;
  margin-right: 1em;
`

export const RTomatoesLogo = styled.img`
  width: 45px;
  padding: 6px;
  background: #F93A1E;
  border-radius: 4px 0px 0px 4px;
  display: flex;
  justify-content: left;
`

export const RTomatoesRating = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`


export const RegHeartIcon = styled(FaRegHeart)`
  color: #7B8C98;
  width: 21px;
  height: 21px;
  margin-left: 1em;
  /* opacity: 0;
  transition: transform 500ms ease;
  transform: translateX(80%); */

  :hover {
    cursor: pointer;
  }
`

export const FillHeartIcon = styled(FaHeart)`
  color: #E2B616;
  width: 21px;
  height: 21px;
  margin-left: 1em;
  /* margin-right: 1em; */
  /* opacity: 0;
  transition: transform 500ms ease;
  transform: translateX(80%); */

  :hover {
    cursor: pointer;
  }
`

export const LikeButtonText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`

export const LikeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  width: 180px;
  width: ${({ inFavorites }) => (inFavorites ? "170px" : "180px")};
  height: 42px;
  border: 1px solid #171c21;
  border-radius: 4px;
  color: #7B8C98;
  transition: all 0.5s;

  :hover {
    cursor: pointer;
    background-color: #252525;

    ${RegHeartIcon} {
      color: #fff;
    }

    ${LikeButtonText} {
      color: #fff;
    }


  }
`



export const Overview = styled.p`
  text-align: justify;
  line-height: 1.7;
`

export const GenderWrap = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 600px;

  p {
    margin-right: 50px;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
  }

  @media screen and (max-width: 810px) {
    p {
      margin-right: 20px;
    }
  }
`

export const DateRunTimeWrapper = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;
  font-weight: 400;
  font-size: 1.25rem;
  color: #7b8c98;

  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
  }
`

export const RunTime = styled.p`
  padding-right: 0.9rem;
`

export const ReleaseYear = styled.p`
  padding: 0 0.9rem;
`

export const Rated = styled.p`
  display: flex;
  margin-left: 0.9rem;
  border-radius: 4px;
  background-color: #7b8c98;
  color: #000;
  padding: 0 0.5em;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const MoviePoster = styled.img`
  border-radius: 10px;
  width: 450px;
  height: 600px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: rgba(255, 255, 255, 0.19) 0px 10px 20px,
    rgba(255, 255, 255, 0.23) 0px 6px 6px;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 65%;
    justify-content: center;
    margin: 10px;
    max-width: 450px;
  }
`

export const BackButton = styled(BsArrowLeft)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  /* margin-bottom: 1em; */
  color: #7b8c98;
  transition: all 0.5s;

  :hover {
    color: #fff;
  }
`
