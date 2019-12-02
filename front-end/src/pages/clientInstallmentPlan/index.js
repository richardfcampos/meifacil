import  React from 'react'
import Header from "../../component/header";
import CostumInput from "../../component/costumInput";
import BalloonMsg from "../../component/balloonMsg";
import Button from "../../component/button";
import { parcelas } from "../../utils/parcelas"
import {useDispatch, useSelector} from "react-redux";
import {setInstallmentPlan} from "../../actions";

const ClientInstallmentPlan = (props) => {
    const { history } = props
    const dispatch = useDispatch()
    const installment_plan = useSelector(state => state.charge.installment_plan)
    const product_service_price = useSelector(state => state.charge.product_service_price)
    if (!product_service_price) {
        history.push('/valorProdServCliente')
    }
    const options = parcelas.map((parcel) => {
        let valor = (1+(parcel.porc / 100))*product_service_price.replace('.', '').replace(',', '.')
        valor = (parcel.porc > 0) ? (valor/ parcel.value).toFixed(2) : valor
        return({
            value:parcel.value,
            label: ` ${parcel.value} de ${valor}`
        })
    })

    const setInstallmentPlanDis = async (selectedOption) => {
        await setInstallmentPlan(dispatch, selectedOption.value)
    }
    const Continue = () => {
        history.push('/dtVencCliente')
    }

    return(
        <>
            <Header title='Enviar nova Cobrança'
                    back={() => history.push('/valorProdServCliente')}/>
            <CostumInput
                label='Em quantas vezes o seu cliente pode parcelar?'
                change={ setInstallmentPlanDis }
                options={ options }
                selectedOption={ installment_plan }
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