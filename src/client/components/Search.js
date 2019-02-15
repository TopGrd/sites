import React from 'react'
import styled from 'styled-components'
import google from '../assets/img/google.png'
import baidu from '../assets/img/baidu.png'
import bing from '../assets/img/bing.png'
import search from '../assets/img/search.png'
import { SEARCH_URL } from '../constants'

const Images = {
  baidu,
  google,
  bing,
}

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`

const SearchLeft = styled.div`
  display: flex;
  width: 80%;
  height: 54px;
  line-height: 20px;
  border: 1px solid;
  outline: 0;
  background-color: #fff;
  border-color: ${({ focus }) => (focus ? '#fda31e' : 'rgba(217, 217, 217, 0.96)')};
  box-shadow: ${({ focus }) => (focus ? '0 0 10px #fda31e' : 'none')};
`

const SearchLogo = styled.div`
  width: 40px;
  align-items: center;
  justify-content: center;
  background: ${({ type }) => `url(${Images[type]}) center center no-repeat`};
  filter: grayscale(100%);
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

const SearchMethods = styled.ul`
  display: ${({ listDisplay }) => (listDisplay ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  width: 155px;
  border: 1px solid rgba(217, 217, 217, 0.96);
  background-color: #fff;
  z-index: 100;
  padding: 0;
`

const SearchItem = styled.li`
  padding-left: 39px;
  background: ${({ type }) => `url(${Images[type]}) 10px no-repeat`};
  overflow: hidden;
  height: 34px;
  line-height: 34px;
  color: #545454;
  cursor: pointer;
`

class Search extends React.Component {
  state = {
    focus: false,
    value: '',
    searchType: 'google',
    listDisplay: false,
  }

  constructor(props) {
    super(props)
    this.searchInput = React.createRef()
  }

  handleSearch = () => {
    const { value, searchType } = this.state
    const searchUrl = `${SEARCH_URL[searchType]}${value}`
    window.open(searchUrl)
  }

  setValue = e => this.setState({ value: e.target.value })

  setSearchType = (e) => {
    const { target } = e
    const { listDisplay } = this.state
    if (target.nodeName.toLowerCase() === 'li') {
      const type = target.getAttribute('type')
      this.setState({ searchType: type, listDisplay: !listDisplay })
    }
  }

  toggleMethods = () => {
    const { listDisplay } = this.state
    this.setState({ listDisplay: !listDisplay })
  }

  handleFocus(isFocus) {
    this.setState({
      focus: isFocus,
    })
  }

  render() {
    const {
      focus, value, searchType, listDisplay,
    } = this.state

    return (
      <SearchWrapper>
        <SearchLeft ref={this.searchInput} focus={focus}>
          <SearchLogo type={searchType} onClick={this.toggleMethods} />
          <InputWrapper>
            <SearchInput
              onFocus={() => this.handleFocus(true)}
              onBlur={() => this.handleFocus(false)}
              onChange={this.setValue}
              maxLength="100"
              autoComplete="off"
              type="text"
              placeholder="Good day 😆！"
              value={value}
            />
          </InputWrapper>
          <SearchMethods onClick={this.setSearchType} listDisplay={listDisplay}>
            <SearchItem type="google">谷歌</SearchItem>
            <SearchItem type="baidu">百度</SearchItem>
            <SearchItem type="bing">必应</SearchItem>
          </SearchMethods>
          <Submit onClick={this.handleSearch} />
        </SearchLeft>
      </SearchWrapper>
    )
  }
}

export default Search
