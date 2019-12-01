import React, { useState } from "react"
import Header from "../../component/header";
import CostumInput from "../../component/CostumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";

const ClientProdServValue = (props) => {
    const { history } = props
    const [prodServValue, setProdServValue] = useState('')
    const bottonStyle = (prodServValue) ? {} : { background: '#b1b4be' }

    const Continue = () => {
        if (prodServValue){
           history.push('/valorParcCliente')
        }
    }

    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/emailcliente')}/>
            <CostumInput
                label='Qual o valor do produto?'
                change={ setProdServValue }
                value={ prodServValue }
                placeholder='R$ 0,00'
                type='money'
            />
            <BalloonMsg />
            <Button name='CONTINUAR'
                    style={ bottonStyle }
                    callback={ Continue }
            />
        </>
    )
}

export default ClientProdServValue