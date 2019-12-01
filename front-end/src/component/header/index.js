import React from 'react'
import styled from "styled-components";
import { FaArrowLeft } from 'react-icons/fa'

const MyHeader = styled.header`
    height: 60px;
    background: #43a2b0;
    color: #fff;
    font-family: "sans-serif";
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;

`
const BackArrow = styled(FaArrowLeft)`
  font-weight: lighter;
  margin-right: 30px;
  margin-left: 20px;
  color: #fff;
`
const Header = (props) => {
    const { title } = props
    return (
        <MyHeader>
            <BackArrow/>
            <span className='header-title'>
                { title }
            </span>
        </MyHeader>
    )
}

export default Header