import React from 'react'
import styled from 'styled-components'
import google from '../assets/google.png'
import search from '../assets/search.png'

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`

const SearchLeft = styled.div`
  display: flex;
  width: 877px;
  height: 54px;
  line-height: 20px;
  border: 1px solid;
  outline: 0;
  border-color: ${({ focus }) =>
    focus ? '#fda31e' : 'rgba(217, 217, 217, 0.96)'};
  box-shadow: ${({ focus }) =>
    focus ? '0 0 10px #fda31e' : 'none'};
`

const SearchLogo = styled.div`
  width: 40px;
  align-items: center;
  justify-content: center;
  background: url(${google}) center center no-repeat;
  filter: grayscale(100%);
  filter: alpha(opacity=20);
  opacity: 0.2;
  cursor: pointer;

  :hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`

const SearchInput = styled.input`
  height: 52px;
  width: 100%;
  outline: 0;
  border: 0;
  font-size: 16px;
  padding-left: 15px;
`

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`

const Submit = styled.button`
  width: 123px;
  height: 54px;
  line-height: 26px;
  background: url(${search}) #1890ff 48px center no-repeat;
  background-size: 35px 35px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid #1890ff;
  cursor: pointer;
`

class Search extends React.Component {
  state = {
    focus: false
  }

  constructor(props) {
    super(props)
    this.searchInput = React.createRef()
  }

  handleFocus(isFocus) {
    this.setState({
      focus: isFocus
    })
  }

  render() {
    const { focus } = this.state

    return (
      <SearchWrapper>
        <SearchLeft ref={this.searchInput} focus={focus}>
          <SearchLogo />
          <InputWrapper>
            <SearchInput
              onFocus={() => this.handleFocus(true)}
              onBlur={() => this.handleFocus(false)}
              maxLength="100"
              autoComplete="off"
              type="text"
              placeholder="Good day 😆！"
            />
          </InputWrapper>
          <Submit />
        </SearchLeft>
      </SearchWrapper>
    )
  }
}

export default Search
