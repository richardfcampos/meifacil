import React, { useState } from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/CostumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";

const ClientProdServ = (props) => {
    const { history } = props
    const [prodServ, setProdServ] = useState('')
    const bottonStyle = (prodServ.length > 5) ? {} : { background: '#b1b4be' }

    const Continue = () => {
        if (prodServ.length > 5){
            alert()
        }
    }
    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/emailcliente')}/>
            <CostumInput
                label='Descreva em poucas palavras qual o produto ou serviço oferecido'
                change={ setProdServ }
                value={ prodServ }
                placeholder='Ex.: Venda de camiseta branca'
            />
            <BalloonMsg />
            <Button name='CONTINUAR'
                    style={ bottonStyle }
                    callback={ Continue }
            />
        </>
    )
}

export default ClientProdServ