import React from "react"
import { A } from "../Typography"
import ContactInfoList from "./ContactInfoList"
import ContactInfoListItem from "./ContactInfoListItem"

export default function ContactInfo() {
  return (
    <ContactInfoList>
      <ContactInfoListItem>
        <A
          href="https://github.com/spyros-uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </A>
      </ContactInfoListItem>
      <ContactInfoListItem>
        <A
          href="https://twitter.com/__spyros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </A>
      </ContactInfoListItem>
    </ContactInfoList>
  )
}
