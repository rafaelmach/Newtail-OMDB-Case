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
  width: 100%;
  height: 55px;
  /* background-color: white; */
  margin: 0 auto;
  border-radius: 2px;
  color: black;

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

// export const XXX = styled.div`
//   display: flex;
//   margin-top: 50px;

//   input {
//     background-color: white;
//     border: 0;
//     border-radius: 2px;
//     border-top-right-radius: 0px;
//     border-bottom-right-radius: 0px;
//     font-size: 18px;
//     padding: 15px;
//     height: 30px;
//     width: 1000px;

//     &:focus {
//       outline: none;
//   }
// }
// `

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
