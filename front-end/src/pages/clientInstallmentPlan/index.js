import  React,  { useState } from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/costumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";

const ClientInstallmentPlan = (props) => {
    const { history } = props
    const options = [
        {value: 1, label: '1 Parcela de '},
        {value: 2, label: '2 Parcela de '},
        {value: 3, label: '3 Parcela de '},
        {value: 4, label: '4 Parcela de '},
        {value: 5, label: '5 Parcela de '},
        {value: 6, label: '6 Parcela de '},
    ]
    const [installmentPlan, setInstallmentPlan] = useState(options)

    const Continue = () => {
        if (installmentPlan){
            history.push('/dtVencCliente')
        }
    }

    return(
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/valorProdServCliente')}/>
            <CostumInput
                label='Em quantas vezes o seu cliente pode parcelar?'
                change={ setInstallmentPlan }
                value={ installmentPlan }
                placeholder='R$ 0,00'
                type='select'
            />
            <BalloonMsg />
            <Button name='CONTINUAR'
                    callback={ Continue }
            />
        </>
    )
}

export default ClientInstallmentPlan