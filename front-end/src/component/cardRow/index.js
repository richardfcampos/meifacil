import React from 'react'
import styled from "styled-components"
import { MdKeyboardArrowRight } from "react-icons/all"

const Card = styled.div`
  height: 80px;
  width: 90%;
  border: none;
  background: #fff;
  font-size: 25px;
  text-align: center;
  font-weight: bolder;
  color: #0096af;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.19);
  
`

const Arrow = styled(MdKeyboardArrowRight)`
 color: #fff;
 float: right;
 height: 20px;
 
`
const ArrowBadge = styled.div`
  bottom: 30px;
  height: 80px;
  background: #f0b400;
  width: 40px;
  float: right;
  border-radius: 0 8px 8px 0;
  display: flex;
  position: relative;
  right: 0;
  justify-content: center;
  align-items: center; 
`

const Container = styled.div`
  display: flex;
  padding-top: 25px;
  width: 100%;
  justify-content: center;
  align-items: center; 
  
`

const PartList = styled.div`
  display: grid;
  position: relative;
  top: 15px;
  left: 20px;
  grid-template-columns: 5fr 5fr;
  border-bottom: 1px solid #d6d6d7;
  color: #707070;
  font-size: 12px;
`

const ListTitle = styled.div`
  text-align: left;
`
const ListValue = styled.div`
  text-align: left;
`


const CardRow = (props) => {
    const { value } = props

    return (

        <>
            <Container>
                <Card>
                    <PartList>
                        <ListTitle> <b>{ value.name }</b></ListTitle>
                        <ListValue style={{ color:'#f0b400'}}>{ value.due_date }</ListValue>
                    </PartList>
                    <PartList style={{ top:'25px', fontWeight:'lighter'}}>
                        <ListTitle>{ value.product_service_description }</ListTitle>
                        <ListValue style={{color: '#c0c2ca'}}> R$ {value.product_service_price}</ListValue>
                    </PartList>
                    <ArrowBadge>
                        <Arrow/>
                    </ArrowBadge>
                </Card>
            </Container>
        </>

    )
}

export default CardRow