import React from 'react'
import styled from 'styled-components'
import BookmarkBox from './BookmarkBox'

const Wrapper = styled.div`
  margin-top: 1rem;
`

const BookmarkMain = () => (
  <div className="row">
    <Wrapper className="col-xs-4">
      <BookmarkBox />
    </Wrapper>
    <Wrapper className="col-xs-4">
      <BookmarkBox />
    </Wrapper>
    <Wrapper className="col-xs-4">
      <BookmarkBox />
    </Wrapper>
  </div>
)

export default BookmarkMain
