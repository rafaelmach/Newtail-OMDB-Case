import { useContext, useEffect, useRef } from "react"
import { Background, ModalContent, ModalWrapper } from "./Modal.styles"
import ReactDom from "react-dom"
import GlobalStateContext from "../../global/GlobalStateContext"

const Modal = ({ scrollStatus }) => {
  const { showModal, setShowModal, likeMessage } =
    useContext(GlobalStateContext)

  const modalRef = useRef()

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  return ReactDom.createPortal(
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper likeMessage={likeMessage} scrollStatus={scrollStatus}>
            <ModalContent>
              <p>{likeMessage}</p>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>,
    document.getElementById("portal")
  )
}

export default Modal
