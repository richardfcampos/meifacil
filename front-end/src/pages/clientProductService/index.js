import React from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/costumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";
import {useDispatch, useSelector} from "react-redux";
import {setProductServiceDescription} from "../../actions";

const ClientProdServ = (props) => {
    const { history } = props
    const product_service_description = useSelector(state => state.charge.product_service_description)
    const email = useSelector(state => state.charge.email)
    const dispatch = useDispatch()
    if (!email) {
        history.push("/emailCliente")
    }
    const bottonStyle = (product_service_description.length > 5) ? {} : { background: '#b1b4be' }

    const setProdServ = async (value) => {
        await setProductServiceDescription(dispatch, value)
    }
    const Continue = () => {
        if (product_service_description.length > 5){
            history.push('/valorProdServCliente')
        }
    }
    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/emailcliente')}/>
            <CostumInput
                label='Descreva em poucas palavras qual o produto ou serviço oferecido'
                change={ setProdServ }
                value={ product_service_description }
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