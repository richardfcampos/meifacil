import React from 'react'
import Header from "../../component/header";
import styled from "styled-components"
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";

const ClientChargeReview = (props) => {
    const { history } = props

    const Continue = () => {
        alert()
    }
    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/dtVencCliente')}/>
            <BalloonMsg />
            <Button name='CONTINUAR'
                    callback={ Continue }
            />
        </>
    )
}

export default ClientChargeReview
