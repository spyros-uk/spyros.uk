import styled from "styled-components"

const ContactInfoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: space-between;

  margin: 0;
  padding: 0;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 3vw;
  }
`

export { ContactInfoList as default }
