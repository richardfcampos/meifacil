import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/header"
import Button from "../../component/button"
import CostumInput from "../../component/costumInput"
import BalloonMsg from "../../component/balloonMsg"
import { MdInfoOutline } from "react-icons/all"
import styled from "styled-components"
import { setName } from "../../actions"

const Msg = styled.div`
  width: 100%;
  position: fixed;
  bottom: 85px;
  height: 20px;
  margin-left: 20px;
  font-size: 10px;
  color: #7d7d7d;
`

const Info = styled(MdInfoOutline)`
  color: #43a2b0;
  font-size: 20px;
  position: relative;
  top:7px;
  margin-right: 10px;
`

const ClientName = (props) => {
    const { history } = props
    const name = useSelector(state => state.charge.name)
    const dispatch = useDispatch()

    const setNameDisp = async (value) => {
        await setName(dispatch, value)
    }
    const Continue = () => {
        if (name.length > 5) {
            history.push('/emailCliente')
        }
    }

    const bottonStyle = (name.length > 5) ? {} : { background: '#b1b4be' }

    return(
        <>
            <Header title='Enviar nova Cobrança' back={() => history.push('/')}/>
            <CostumInput
                label='Qual é o nome completo do seu cliente?'
                change={ setNameDisp }
                value={name}
                placeholder='Nome Completo'
            />
            <Msg>
                <Info />Saiba quanto vai pagar por esse serviço
            </Msg>
            <BalloonMsg />
            <Button name='CONTINUAR'
                    style={ bottonStyle }
                    callback={ Continue }
            />

        </>
    )
}

export default ClientName