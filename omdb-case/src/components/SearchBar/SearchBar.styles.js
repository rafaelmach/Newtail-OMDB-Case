import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 0 20px;
  margin-top: 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* max-width: 600px; */
  min-width: 1500px;
  width: 90%;
  height: 55px;
  margin: 0 auto;
  border-radius: 2px;
  color: black;

  @media screen and (max-width: 1000px) {
        
    min-width: 0;

    width: 100%;

    }

  input {
    background-color: white;
    margin: 10px 0;
    padding: 15px 1px 15px 70px;
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
  top: 14px;
  height: 30px;
  width: 30px;
  background-color: transparent;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`
