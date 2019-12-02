import React from 'react'
import Header from "../../component/header";
import styled from "styled-components"
import BalloonMsg from "../../component/balloonMsg"
import Button from "../../component/button"
import ShowValue from "../../component/showValue"
import CharReviewList from "../../component/chargeReviewList"

const TopDiv = styled.div`
  width: 100%;
  height: 50%;
  position:fixed;
  top:0;
  bottom:70%;
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
    top:30%;
    right:0;
    left:0;
    content:" ";
    z-index:-1;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px; 
`



const ClientChargeReview = (props) => {
    const { history } = props

    const dados = {
        name: 'Richard Fonseca Campos',
        email: 'richardfcampos@gmail.com',
        duoDate: '11/10/2020',
        product_service_price: '15,00',
        installment_plan: '1'
    }

    const Continue = () => {
        alert()
    }
    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/dtVencCliente')}/>
            <TopDiv>
                <ShowValue
                    desc='Nome do Serviço'
                    valStyle={{position: 'relative', bottom: '12vw'}}
                    descStyle={{position: 'relative', bottom: '12vw'}}
                />
            </TopDiv>
            <BottomDiv>
                <CharReviewList value={dados}/>
            </BottomDiv>
            <BalloonMsg />
            <Button name='ENVIAR COBRANÇA'
                    callback={ Continue }
            />
        </>
    )
}

export default ClientChargeReview
