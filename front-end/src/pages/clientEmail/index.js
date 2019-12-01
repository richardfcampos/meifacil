import React, { useState } from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/CostumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";

const ClintEmail = (props) => {
    const { history } = props
    const [email, setEmail] = useState('')

    const validEmail = () => email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

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
                change={ setEmail }
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