import styled from "styled-components"
import { IoMdSearch } from "react-icons/io"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #0b1014;
  border-bottom: solid 3px #232323;
  /* background-color: blue; */
  width: 100vw;
  height: 70px;
 
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
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
`

export const Logo = styled.img`
  border-radius: 10px;
  width: 200px;
  margin-right: 10px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display:none;
  }
`

export const LogoPlayIcon = styled.img`
  border-radius: 10px;
  width: 40px;
  margin-right: 10px;
  display: none;
  cursor: pointer;
  

  @media screen and (max-width: 480px) {
    display:block;
    margin-left: 10px;
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

  :hover {
    background-color: #252525;
    cursor: pointer;

    ${FavoritesIcon} {
      color: #fff;
    }
  }
`
