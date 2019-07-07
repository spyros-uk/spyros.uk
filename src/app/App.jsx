import React from "react";

import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import Frame from "../components/Frame";
import { H1, P } from "../components/Typography";
import ContactInfo from "../components/ContactInfo";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Frame>
          <H1>SPYROS</H1>
          <P>
            I am a Software Engineer, passionate about clean and quality code,
            with expertise in the JavaScript ecosystem. From frameworks like
            React and Angular, down to vanilla JavaScript, my goal is to produce
            robust and scalable Applications by writing readable, testable and
            performant code. I have a strong background in UI/UX and I am
            delighted to work in an Agile environment with teams and people from
            all over the world.
          </P>

          <ContactInfo />
        </Frame>
      </Layout>
    </>
  );
}
