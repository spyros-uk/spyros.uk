import React from "react"

import FrameContainer from "./FrameContainer"
import FrameBorder from "./FrameBorder"

export default function Frame({ children }) {
  return (
    <FrameContainer>
      <FrameBorder>{children}</FrameBorder>
    </FrameContainer>
  )
}
