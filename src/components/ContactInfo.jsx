import React from "react";
import styled from "styled-components";
import { A } from "./Typography";

export default function ContactInfo() {
  return (
    <ContactInfoList>
      <ContactInfoItem>
        <A
          href="https://github.com/spyros-uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </A>
        <A
          href="https://twitter.com/__spyros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </A>
      </ContactInfoItem>
    </ContactInfoList>
  );
}

const ContactInfoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: space-between;

  margin: 0;
  padding: 0;
  width: 100%;

  & * :not(:last-child) {
    margin-right: 3vw;
  }
`;

const ContactInfoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  width: 100%;
`;
