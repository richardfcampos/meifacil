import React from 'react'
import styled from "styled-components"
import renderHTML from 'react-render-html'

const ValueOutPut = styled.div`
  height: 20px;
  width: 60%;
  border: none;
  font-size: 25px;
  text-align: center;
  font-weight: bolder;
  color: #0096af;
  padding-bottom: 10px;
  border-bottom: 2px solid #0096af;
`

const Description = styled.div`
  font-size: 15px;
  color: grey;
  display: block;
  padding-top: 10px;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center; 
  
`

const ShowValue = (props) => {
    const { value, desc, valStyle={},  descStyle={}} =  props
    return (
        <>
        <Container>
            <ValueOutPut
                style={ valStyle }
                value={(value) ? `R$ ${value}` : 'R$ 0,00' } >
                {(value) ? `R$ ${value}` : 'R$ 0,00' }
            </ValueOutPut>
        </Container>
        <Container>
            <Description style={ descStyle }>
                { renderHTML(desc) }
            </Description>
        </Container>
        </>
    )
}

export default ShowValue