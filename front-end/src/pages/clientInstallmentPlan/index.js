import  React,  { useState } from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/CostumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";

const ClientInstallmentPlan = (props) => {
    const { history } = props
    const [installmentPlan, setInstallmentPlan] = useState('')

    const Continue = () => {
        if (installmentPlan){
            alert()
        }
    }

    return(
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/emailcliente')}/>
            <CostumInput
                label='Qual o valor do produto?'
                change={ setInstallmentPlan }
                value={ installmentPlan }
                placeholder='R$ 0,00'
                type='money'
            />
            <BalloonMsg />
            <Button name='CONTINUAR'
                    callback={ Continue }
            />
        </>
    )
}

export default ClientInstallmentPlan