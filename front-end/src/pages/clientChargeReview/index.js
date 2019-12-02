import React from 'react'
import Header from "../../component/header";
import styled from "styled-components"
import BalloonMsg from "../../component/balloonMsg"
import Button from "../../component/button"
import ShowValue from "../../component/showValue"
import CharReviewList from "../../component/chargeReviewList"
import { GoCreditCard} from "react-icons/all"
import {useSelector} from "react-redux";
import moment from "moment";

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

const CrediCard = styled(GoCreditCard)`
  font-size: 30px;
  text-align: center;
  position:relative;
  margin-top: 7vw;
`

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`



const ClientChargeReview = (props) => {
    const { history } = props
    const data = useSelector(state => state.charge)
    const dados = {
        name: data.name,
        email: data.email,
        duoDate:moment(data.due_date).format('DD/MM/YYYY') ,
        product_service_price: data.product_service_price,
        installment_plan: data.installment_plan
    }

    const Continue = () => {
        history.push('/cobrancaGerada')
    }
    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/dtVencCliente')}/>
            <ContainerCard>
                <CrediCard />
            </ContainerCard>
            <TopDiv>
                <ShowValue
                    value={data.product_service_price}
                    desc={data.product_service_description}
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
