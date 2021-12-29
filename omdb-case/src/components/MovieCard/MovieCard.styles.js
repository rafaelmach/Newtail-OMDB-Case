import styled from "styled-components";
import { MdPageview } from "react-icons/md"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.4s;
  object-fit: cover;
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


export const CardVote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 1;
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

export const MovieTitle = styled.h2`
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 14%;
  padding: 0 2px;
  font-weight: 500;
  opacity: 0;
  transition: ease-in 0.1s;
  transition: transform 500ms ease;
  transform: translateY(70%);
`

export const Released = styled.p`
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin-left: 5%;
  margin-bottom: 5%;
  font-weight: 500;
  color: #7b8c98;
  font-size: 1.2em;
  opacity: 0;
  transition: transform 500ms ease;
  transform: translateY(70%);
`

export const RegularHeartIcon = styled(FaRegHeart)`
  position: absolute;
  z-index: 3;
  top: 3%;
  right: 5%;
  color: white;
  width: 1.5em;
  height: 1.5em;
  opacity: 0;
  transition: transform 500ms ease;
  transform: translateX(80%);

  :hover {
    cursor: pointer;
    background: red; 
}
`

export const FilledHeartIcon = styled(FaHeart)`
  position: absolute;
  z-index: 3;
  top: 3%;
  right: 5%;
  color: white;
  width: 1.5em;
  height: 1.5em;
  opacity: 0;
  transition: transform 500ms ease;

  :hover {
    cursor: pointer;
    background: blue; 
}
`


export const DetailsIcon = styled(MdPageview)`
position: absolute;
  z-index: 3;
  top: 37%;
  right: 39%;
  color: #E2B616;
  width: 4em;
  height: 4em;
  opacity: 0;
  transition: opacity 300ms ease-in;
`

export const MovieCardContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 400px;
  margin: 15px;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255, 0.05) 0px 6px 24px 0px, rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;

      ${CardVote} {
    opacity: 0;
  }

  ${MovieTitle} {
    opacity: 1;
    transform: translateY(0);
  }

  ${Released} {
    opacity: 1;
    transform: translateY(0);
  }

  ${RegularHeartIcon} {
    opacity: 1;
    transform: translateX(0);
  }

  ${DetailsIcon} {
    opacity: 1;
  }

  ${CardImage} {
    opacity: 0.1;
    background-color: blue;
  }
  }

`
