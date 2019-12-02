import React from 'react'
import Header from "../../component/header"
import ShowValue from "../../component/showValue";
import styled from "styled-components"
import CardRow from "../../component/cardRow"


const TopContainer = styled.div`
  margin-top: 7vw;
  margin-bottom: 7vw;
`

const BottomContainer = styled.div`
  background: #f4f4f6;
  height: 100vH;
`

const DueDates = (props) => {
    const { history } = props

    const data = [{
        name: 'Fulando de tal',
        product_service_description:'Barba',
        product_service_price: 15,
        due_date:'11/11/2020'
    },
        {
            name: 'Fulando de tal',
            product_service_description:'Barba',
            product_service_price: 15,
            due_date:'11/11/2020'
        }]

    return (
        <>
            <Header title='Cobranças a vencer' back={ () => history.push('/')}/>
            <TopContainer>
                <ShowValue desc='Cobranças não pagas <br /> e que ainda não venceram'
                    descStyle={{paddingLeft:'25vw', paddingRight:'25vw', textAlign:'center'}}
                    valStyle={{color:'#f0b400', borderColor:'#f0b400'}}
                />
            </TopContainer>
            <BottomContainer>
                { data.map((value) => {
                    return (
                        <CardRow value={value}/>
                    )
                })}


            </BottomContainer>
        </>
    )

}

export default DueDates