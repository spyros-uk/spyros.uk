import React from "react"

import { H1, P } from "../Typography"
import ContactInfo from "../Widgets/ContactInfo"
import Frame from "../Widgets/Frame"
import styled from "styled-components"

export default function Home() {
  return (
    <Frame>
      <Container>
        <H1>SPYROS</H1>
        <P>
          I am a Software Engineer, passionate about clean and quality code,
          with expertise in the JavaScript ecosystem. From frameworks like React
          and Angular, down to vanilla JavaScript, my goal is to produce robust
          and scalable Applications by writing readable, testable and performant
          code. I have a strong background in UI/UX and I am delighted to work
          in an Agile environment with teams and people from all over the world.
        </P>
        <ContactInfo />
      </Container>
    </Frame>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
