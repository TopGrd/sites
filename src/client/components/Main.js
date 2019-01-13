import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 60px;
  padding-top: 5%;
  min-height: 100%;
`

const Main = ({ children }) => <Container>{children}</Container>

export default Main
