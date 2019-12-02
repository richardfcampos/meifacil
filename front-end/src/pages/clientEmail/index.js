import React from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/costumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";
import {useDispatch, useSelector} from "react-redux";
import {setEmail} from "../../actions";

const ClintEmail = (props) => {
    const { history } = props
    const email = useSelector(state => state.charge.email)
    const name = useSelector(state => state.charge.name)
    if (!name) {
        history.push('/nomecliente')
    }
    const dispatch = useDispatch()

    const validEmail = () => email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    const setEmailDisp = async (value) => {
        await  setEmail(dispatch, value)
    }

    const bottonStyle = (validEmail()) ? {} : { background: '#b1b4be' }
    const Continue = () => {
        if ( validEmail() ){
            history.push('/prodServCliente')
        }
    }

    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/nomecliente')}/>
            <CostumInput
                label='Qual é o e-mail do seu cliente?'
                change={ setEmailDisp }
                value={ email }
                placeholder='E-mail'
            />
            <BalloonMsg />
            <Button name='CONTINUAR'
                    style={ bottonStyle }
                    callback={ Continue }
            />
        </>
    )
}

export default ClintEmail