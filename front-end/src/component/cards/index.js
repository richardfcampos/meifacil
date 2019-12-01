import React from 'react'
import styled from "styled-components"
import { AiOutlineDollar } from "react-icons/all"
import { FaRegCalendarMinus } from "react-icons/all"
import { FaRegCalendarTimes } from "react-icons/all";
import { FaRegTimesCircle } from "react-icons/all";

const MyCard = styled.div`
  display: inline-block;
  margin-left: 3vw;
  margin-bottom: 2vw;
  background: #fff;
  height: 33%;
  width: 46%;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Coin = styled(AiOutlineDollar)`
  font-size: 30px;
  position: relative;
  font-weight: lighter;
  color:#0096af;
  left: 3vw;
  top: 5vw;
`
const ToCome = styled(FaRegCalendarMinus)`
  font-size: 30px;
  position: relative;
  font-weight: lighter;
  color:#0096af;
  left: 3vw;
  top: 5vw;
`

const Late = styled(FaRegCalendarTimes)`
  font-size: 30px;
  position: relative;
  font-weight: lighter;
  color:#0096af;
  left: 3vw;
  top: 5vw;
`

const Canceled = styled(FaRegTimesCircle)`
  font-size: 30px;
  position: relative;
  font-weight: lighter;
  color:#0096af;
  position: relative;
  left: 3vw;
  top: 5vw;

`

const Circle = styled.div `
    background-color:#fff;
    border:1px solid red;  
    color: red;  
    position: relative;
    float: right;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    font-size: 10px;
    height:22px;
    width: 22px;
    text-align: center;
    vertical-align: center;
    right: 2vw;
    top: 2vw;
    span {
      position: relative;
      top: 7px;
    }
`
const ColLeft = styled.div`
  height: 100%;
  width: 50%;
  margin-top: 25px;
  margin-left: 20px;
`

const LabelCard = styled.span`
    position: relative;
    color: gray;
    top: 24px;
    font-size: 15px;
    right: 27px;
`
const GridTop = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  height: 50%;
  width: 100%;
`

const ColRight = styled.div`
  height: 100%;
  width: 50%;
  margin-top: 7px;
  margin-right: 7px;
`

const GridMiddle = styled.div`
  display: grid;
  color: #707070;
  font-size: 12px;
  grid-template-columns: 1fr;
  span {
    padding-top: 10px;
    padding-left: 15px;
  }
`
const GridBottom = styled.div`
  color: #707070;
  font-size: 15px;
  display: grid;
  grid-template-columns: 1fr;
  span {
    padding-left: 15px;
  }
`

const Card = (props) => {
    const { icon, circNum, label, value } = props
    return(
        <>
            <MyCard>
                <GridTop>
                    { icon === 'coins' && <Coin />}
                    { icon === 'tocome' && <ToCome />}
                    { icon === 'late' && <Late />}
                    { icon === 'cancel' && <Canceled />}
                    <Circle>
                        <span>{ circNum }</span>
                    </Circle>
                </GridTop>
                <GridMiddle>
                    <span>{ label }</span>
                </GridMiddle>
                <GridBottom>
                    <span>
                        R$ { value || '0,00' }
                    </span>

                </GridBottom>
            </MyCard>
        </>
    )
}




export default Card