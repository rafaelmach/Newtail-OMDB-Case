import styled from "styled-components";
import { MdClose } from "react-icons/md"

export const Background = styled.div`
    position: fixed;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    transition: all 0.1s ease-in-out;
` 

export const ModalWrapper = styled.div`
    position: fixed;
    top: ${({ scrollStatus }) => (scrollStatus ? "15px" : "100px")};
    right: 10px;
    height: 30px;
    width: ${({ likeMessage }) => (likeMessage === "Added to favorites" ? "150px" : "190px")};
    background: #eee;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    z-index: 1000;
    border-radius: 4px;
    animation: animateMessage 500ms ease;

  @keyframes animateMessage {
    from {
        transform: translateX(30%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
  }

  @media screen and (max-width: 850px) {
        right: 25px;
    }
    
    @media screen and (max-width: 480px) {
        /* top: 15%; */
        /* right: 7%; */
    }
`



export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #141414;
    }


    /* @media screen and (max-width: 1000px) {
        margin-left: 0;
    } */
`

