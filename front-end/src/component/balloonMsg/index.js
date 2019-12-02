import React from 'react'
import {FiXCircle} from "react-icons/all"
import styled from "styled-components"
import { FiMessageSquare } from "react-icons/all"

const FixedCircle = styled.div`
  height: 55px;
  width: 55px;
  position: fixed;
  bottom: 70px;
  right: 30px;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const MsgIcon = styled(FiMessageSquare)`
  font-size: 45px;
  z-index: 1000;
  fill: #fff;
  transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
`

const BalloonMsg = (props) => {

    return(
        <FixedCircle>
            <MsgIcon />
        </FixedCircle>
    )

}

export default BalloonMsg