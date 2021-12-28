import React from "react"
import { LoadingContainer } from "./Loading.styles"
import BeatLoader from "react-spinners/BeatLoader"

const Loading = () => {
  return (
    <LoadingContainer>
      <BeatLoader size={30} color={"#E2B616"} loading={true} />
    </LoadingContainer>
  )
}

export default Loading
