import styled from "styled-components"

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  margin-bottom: 1.1em;
  transition: all 2s;
  animation: animateThumb 2s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const PaginationButton = styled.button`
  background-color: #14181c;
  border: 1px solid #171c21;
  color: #8c9ba6;
  padding: 10px 22px;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  margin: 0 0.2em;
  margin-bottom: 0.5em;
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    background-color: #252525;
    color: #fff;
  }

  @media (max-width: 699px) {
  }
`
