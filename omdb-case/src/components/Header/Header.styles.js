import styled from "styled-components"
import { IoMdSearch } from "react-icons/io"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #0b1014;
  width: 100vw;
  height: 75px;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 6px 12px -2px,
    rgba(255, 255, 255, 0.3) 0px 3px 7px -3px;

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 100%;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* background-color: darkgreen; */

  @media screen and (max-width: 480px) {
    /* margin: 0 20px; */
    width: 65%;
    margin-left: 0.8em;
  }
`

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* max-width: 600px; */
  min-width: 1000px;
  width: 100%;
  height: 55px;
  border-radius: 2px;
  color: black;
  /* background-color: blue; */

  @media screen and (max-width: 1000px) {
    min-width: 0;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    /* width: auto; */
    /* margin-left: 1em; */
    max-width: 300px;
  }

  input {
    background-color: white;
    margin: 0;
    padding: 5px 50px;
    border: 0;
    width: 87%;
    border-radius: 4px;
    font-size: 21px;
    height: 30px;
    color: #4f4f4f;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 480px) {
      padding: 5px 40px;
      width: 100%;
      font-size: 18px;
    }
  }
`

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  margin-right: 92%;
  top: 13px;
  height: 30px;
  width: 30px;
  background-color: transparent;
  color: #919191;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin-right: 85%;
  }
`

export const Logo = styled.img`
  border-radius: 10px;
  width: 200px;
  margin-right: 13px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const LogoPlayIcon = styled.img`
  border-radius: 10px;
  width: 40px;
  margin-right: 10px;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: block;
    /* margin: 0 1em; */
    margin: 0;
    margin-left: 0.1em;
  }
`

export const FavoritesIcon = styled(BsFillBookmarkHeartFill)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  color: #919191;
  padding: 0 3px;
  transition: all 0.5s;

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
    margin-left: 0.5em;
    height: 27px;
    width: 27px;
  }
`
export const FavoritesText = styled.div`
  font-weight: 500;
  color: #fff;
  font-size: 1.2em;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`
export const FavoritesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  width: 7em;
  padding: 9px;
  border-radius: 4px;
  transition: all 0.5s;

  :hover {
    background-color: #252525;
    cursor: pointer;

    ${FavoritesIcon} {
      color: #fff;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
    width: 3em;
  }
`
