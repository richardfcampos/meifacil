import React from 'react'
import Header from "../../component/header"
import CostumInput from "../../component/costumInput"
import BalloonMsg from "../../component/balloonMsg"
import Button from "../../component/button"
import {useDispatch, useSelector} from "react-redux";
import {setDueDate} from "../../actions";

const ClientDueDate = (props) => {
    const { history } = props
    const due_date = useSelector(state => state.charge.due_date)
    const dispatch = useDispatch()

    const Continue = () =>  {
        if (due_date){
            history.push('/resumoCobranca')
        }
    }
    const changeDate = async(date) => {
        await setDueDate(dispatch, date)
    }

    const bottonStyle = (due_date) ? {} : { background: '#b1b4be' }

    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/valorParcCliente')}/>
            <CostumInput
                label='Qual a data de vencimento?'
                change={ changeDate }
                value={ due_date }
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