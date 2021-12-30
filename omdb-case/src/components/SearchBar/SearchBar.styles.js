import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin: auto; */
  background-color: #232323;
  /* background-color: blue; */
  width: 100vw;
  height: 70px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* padding: 0 20px; */
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* max-width: 600px; */
  min-width: 1000px;
  width: 80%;
  height: 55px;
  /* margin: 0 auto; */
  border-radius: 2px;
  color: black;

  @media screen and (max-width: 1000px) {
    min-width: 0;

    width: 100%;
  }

  input {
    background-color: white;
    margin: 0px 0;
    padding: 5px 1px 5px 70px;
    border: 0;
    width: 70%;
    border-radius: 9px;
    font-size: 21px;
    height: 30px;

    &:focus {
      outline: none;
    }
  }
`

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  margin-right: 70%;
  top: 15px;
  height: 25px;
  width: 25px;
  background-color: transparent;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  border-radius: 10px;
  width: 200px;
  margin-left: 100px;
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
`
export const FavoritesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
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
