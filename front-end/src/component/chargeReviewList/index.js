import React from 'react'
import styled from "styled-components"

const PartList = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  border-bottom: 1px solid #d6d6d7;
  color: #707070;
  padding: 10px;
  font-size: 12px;
`
const ListTitle = styled.div`
  text-align: left;
`
const ListValue = styled.div`
  text-align: right;
`
const CharReviewList = (props) => {

    const { value } = props
    return (
        <>
            <PartList>
                <ListTitle>Vencimento:</ListTitle>
                <ListValue>{ value.duoDate }</ListValue>
            </PartList>
            <PartList>
                <ListTitle>Nome Completo:</ListTitle>
                <ListValue>{ value.name }</ListValue>
            </PartList>
            <PartList>
                <ListTitle>E-mail:</ListTitle>
                <ListValue>{ value.email }</ListValue>
            </PartList>
            <PartList>
                <ListTitle>Forma de Pagamento:</ListTitle>
                <ListValue>Cartão de Crédico</ListValue>
            </PartList>
            <PartList>
                <ListTitle>Líquido a receber:</ListTitle>
                <ListValue>{ `R$ ${value.product_service_price}` }</ListValue>
            </PartList>
            <PartList>
                <ListTitle>Número de Parcelas:</ListTitle>
                <ListValue>{ `até ${value.installment_plan}X` }</ListValue>
            </PartList>
        </>
    )
}

export default CharReviewList