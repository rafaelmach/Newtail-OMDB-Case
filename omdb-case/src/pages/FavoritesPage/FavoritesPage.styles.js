import styled from "styled-components"
import { FaHome } from "react-icons/fa"
import { RiArrowUpSLine } from "react-icons/ri"

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
    font-weight: 700;
    font-size: 2.1rem;
    margin: 0.6em;
    text-align: center;
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
      font-size: 1.6rem;
    }

    p {
      font-size: 1.3rem;
      margin: 0.1em 0.4em;
    }
  }
`

export const ButtonsWrap = styled.div`
  opacity: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 112px;
  background: #121214;
  position: sticky;
  border-top: 1px solid #29292e;

  opacity: ${({ scrollStatus }) => (scrollStatus ? "1" : "0")};
  transition: all 0.5s;

  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`

export const HomeIcon = styled(FaHome)`
  height: 25px;
  width: 25px;
  color: #fff;
  padding: 0 3px;
  transition: all 0.5s;
`

export const BackToTopIcon = styled(RiArrowUpSLine)`
  width: 30px;
  height: 30px;
  color: #fff;
  transition: all 0.5s;
`

export const HomeIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
  width: 2em;
  padding: 13px 11px;
  border-radius: 4px;
  transition: all 0.5s;
  background-color: #202024;

  :hover {
    background-color: #29292e;
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    margin-right: 5%;
  }
`

export const BackToTopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7em;
  padding: 10px 12px;
  margin-right: 350px;
  border-radius: 4px;
  transition: all 0.5s;
  background-color: #202024;

  :hover {
    background-color: #29292e;
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    margin-right: 0;
  }
`
