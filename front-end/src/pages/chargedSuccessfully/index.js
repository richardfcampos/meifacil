import React from 'react'
import Header from "../../component/header"
import CharReviewList from "../../component/chargeReviewList"
import BalloonMsg from "../../component/balloonMsg"
import Button from "../../component/button"
import styled from "styled-components"
import ReactSVG from "react-svg"
import CreditCard from '../../assets/img/credit-card.svg'
import ShareDiv from "../../component/shareDiv"
import { useSelector} from "react-redux";
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


const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContainerMsg = styled.div`
  text-align: center;
  color: #0096af;
  position: relative;
  @media  (max-height: 650px){
    margin-top: -10vw;
  }
`


const ChargedSuccessfully = (props) => {
    const { history } = props
    const data = useSelector(state => state.charge)

    console.log(data)
    if (!data.name){
        history.push('/')
    }
    const dados = {
        name: data.name,
        email: data.email,
        duoDate: moment(data.due_date).format('DD/MM/YYYY'),
        product_service_price: data.product_service_price.replace('.', ','),
        installment_plan: data.installment_plan
    }

    const Continue = () => {
        history.push('/')
    }

    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/dtVencCliente')}/>
            <ContainerCard>
                <ReactSVG src={CreditCard}
                           beforeInjection={svg => {
                               svg.setAttribute('style', 'height: 70px;')
                           }}
                />
            </ContainerCard>
            <ContainerMsg>
                <h2>Cobrança gerada com Sucesso!</h2>
            </ContainerMsg>
            <TopDiv />
            <BottomDiv>
                <CharReviewList value={dados}/>
            </BottomDiv>
            <BalloonMsg />
            <ShareDiv/>

            <Button name='VOLTAR AO INÍCIO'
                    callback={ Continue }
            />
        </>
    )
}

export default ChargedSuccessfully