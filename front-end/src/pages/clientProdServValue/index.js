import React from "react"
import Header from "../../component/header";
import CostumInput from "../../component/costumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";
import {useDispatch, useSelector} from "react-redux";
import {setProductServicePrice} from "../../actions";

const ClientProdServValue = (props) => {
    const { history } = props
    const product_service_price = useSelector(state => state.charge.product_service_price)
    const product_service_description = useSelector(state => state.charge.product_service_description)
    const dispatch = useDispatch()
    if (!product_service_description) {
        history.push('/prodServCliente')
    }
    const bottonStyle = (product_service_price) ? {} : { background: '#b1b4be' }

    const setProdServPrice = async (value) => {
        await setProductServicePrice(dispatch, value.replace('R$ ', ''))
    }
    const Continue = () => {
        if (product_service_price){
           history.push('/valorParcCliente')
        }
    }

    return (
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/emailcliente')}/>
            <CostumInput
                label='Qual o valor do produto?'
                change={ setProdServPrice }
                value={ product_service_price }
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