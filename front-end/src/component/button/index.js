import React from 'react'
import styled from "styled-components"

const Mybutton = styled.button`
  height: 60px;
  width: 100%;
  font-weight: bold;
  border-radius: 5px;
  background: #ffcd36;
  border: none;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const SectionBotton = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center; 
  bottom:0px;
  position: fixed;
  margin-bottom: 7px;
  margin-left: 15px;
`

const Button = (props) => {
    const { name , callback} = props
    return(
        <SectionBotton>
            <Mybutton onClick={ () => callback() }>
                { name }
            </Mybutton>
        </SectionBotton>

    )
}

export default Button