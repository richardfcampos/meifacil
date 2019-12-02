import React from 'react'
import styled from "styled-components"
import { IoIosShareAlt } from "react-icons/all";

const Share = styled.div`
  height: 90px;
  width: 100%;
  background: red;
  position: fixed;
  bottom: 23vw;
  background: #fff;
  color: #efaf12;
  @media  (max-height: 650px){
    height: 70px;
  }
  span {
    font-weight: bold;
    position: relative;
    top: 15px;
    left: 10px;
  }
`

const ShareIcon = styled(IoIosShareAlt)`
  font-size: 20px;
  float: right;
  position: relative;
  right: 10px;
  top: 10px;
`

const ShareDiv = (props) => {

    return (
        <Share>
            <ShareIcon/>
            <span>
                COMPATILHAR
            </span>
        </Share>
    )
}

export default ShareDiv