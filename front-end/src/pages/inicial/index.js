import React from 'react'
import Header from "../../component/header"
import Button from "../../component/button"
import styled from "styled-components"
import ShowValue from "../../component/showValue"
import Card from "../../component/cards";

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const TopDiv = styled.div`
  width: 100%;
  height: 50%;
  position:fixed;
  top:0;
  bottom:50%;
  right:0;
  left:0;
  content:" ";
  z-index:-1;
  display: block;
  padding-top: 45%;
`
const BottomDiv = styled.div`
    background:#f4f4f6;
    position:fixed;
    bottom:0;
    top:50%;
    right:0;
    left:0;
    content:" ";
    z-index:-1;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 5px; 
`


const Inicial = (props) => {
    const { history } = props
    console.log(history)
    return (
        <Container>
            <Header title='Enviar Cobrança'/>
            <TopDiv>
                <ShowValue desc='Saldo Liberado para Transferência'/>
            </TopDiv>
            <BottomDiv className='fundo'>
                <Card
                    icon='coins'
                    circNum='9'
                    label='A Liberar'
                    value={'48.10'}
                />
                <Card
                    icon='tocome'
                    circNum='0'
                    label='A Vencer'
                    value={''}
                />
                <Card
                    icon='late'
                    circNum='36'
                    label='Atrazados'
                    value={'3.013,00'}
                />
                <Card
                    icon='cancel'
                    circNum='22'
                    label='Cancelados'
                    value={'6.996,05'}
                />
                <Button name='ENVIAR NOVA COBRANÇA' callback={ () =>  history.push('/nomecliente')}/>
            </BottomDiv>
        </Container>
    )
}

export default Inicial