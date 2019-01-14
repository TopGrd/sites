import React from 'react'
import styled from 'styled-components'

const BookmarkLink = styled.a`
  background: rgba(255, 255, 255, 1);
  color: #474a4d;
  display: block;
  position: relative;
  text-align: center;
  text-decoration: none;
  line-height: 45px;
  height: 45px;
  font-size: 14px;
  border-radius: 2px;
  transition: all 0.3s ease;

  :hover {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #459df5;
  }
`

const LinkWrapper = styled.div`
  padding: 1px 1px 1px 1px;
`


const s = new Array(9).fill(true).map(item => {
  return (
    <LinkWrapper className="col-xs-4">
      <BookmarkLink>Google</BookmarkLink>
    </LinkWrapper>
  )
})

const BookmarkBox = () => (
  <div className="row">
    {s}
  </div>
)

export default BookmarkBox
