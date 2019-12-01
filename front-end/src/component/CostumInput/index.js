import React from 'react'
import styled from "styled-components"

const Container = styled.div` 
  padding: 15px;
  color: #0096af;
  margin-top: 10px;
`

const MyInput = styled.input`
  width: 93%;  
  height: 50px;
  border-radius: 10px 10px 2px 2px;
  border-style: solid;
  font-size: 17px;
  padding-left: 20px;
  border-color: #dddee3;
  &:focus {
    outline: none;
  } 
  ::placeholder {
    color: #c3c5cd;
    font-weight: bolder;
  } 
  
`

const CostumInput = (props) => {
    const { label, change, value, placeholder } = props
    return(
        <Container>
            <h2>{ label }</h2>
            <MyInput
                type="text"
                value={ value }
                onChange={ event => change(event.target.value)}
                placeholder={ placeholder }
            />
        </Container>
    )
}

export default CostumInput