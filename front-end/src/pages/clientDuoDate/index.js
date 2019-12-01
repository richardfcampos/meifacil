import React, { useState } from 'react'
import Header from "../../component/header"
import CostumInput from "../../component/costumInput"
import BalloonMsg from "../../component/balloonMsg"
import Button from "../../component/button"
import moment from "moment"

const ClientDueDate = (props) => {
    const { history } = props
    const [dueDate, setDueDate] = useState(new Date())
    const Continue = () =>  {
        if (dueDate){
            history.push('/resumoCobranca')
        }
    }
    const changeDate = (date) => {
        setDueDate(date)
    }

    const bottonStyle = (dueDate) ? {} : { background: '#b1b4be' }

    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/valorParcCliente')}/>
            <CostumInput
                label='Qual a data de vencimento?'
                change={ changeDate }
                value={ dueDate }
                placeholder=''
                type='date'
            />
            <BalloonMsg />
            <Button name='CONTINUAR'
                    style={ bottonStyle }
                    callback={ Continue }
            />
        </>
    )
}

export default ClientDueDate