import React from "react"
import styled from "styled-components"

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>
}

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: url("https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")
    no-repeat 50% 40%;
  background-size: cover;
  opacity: 0.9;
`
