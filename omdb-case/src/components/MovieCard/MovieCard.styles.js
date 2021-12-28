import styled from "styled-components"
import { MdPageview } from "react-icons/md"

export const MovieCardContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 400px;
  margin: 15px;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255) 0px 13px 27px -5px,
      rgba(255, 255, 255) 0px 8px 16px -8px;
  }
`

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.5s;
  object-fit: cover;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.2;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const CardVote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 2.3em;
  height: 1.5em;
  top: 0;
  right: 0;
  margin-top: -5px;
  margin-right: -10px;
  position: absolute;
  background-color: black;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
`

export const DetailsIcon = styled(MdPageview)`
  visibility: ${({ hoverCard }) => (hoverCard ? "visible" : "hidden")};
  /* position: absolute;
  margin-right: 70%;
  top: 14px;
  height: 30px;
  width: 30px; */
  /* background-color: transparent; */
  color: white;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

// export const CardVisible = styled.div`
//   visibility: hidden;
//   opacity: 0;
//   transform: translateY(100px);
//   transition: 0.2s;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `
