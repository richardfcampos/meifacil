import React from 'react'
import styled from "styled-components"
import CurrencyFormat from 'react-currency-format'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Container = styled.div` 
  padding: 15px;
  color: #0096af;
  margin-top: 10px;
`

const MyInput = styled.input`
  width: 93%;  
  height: 50px;
  border-radius: 10px 10px 2px 2px;
  border-style: solid;
  font-size: 17px;
  padding-left: 20px;
  border-color: #dddee3;
  &:focus {
    outline: none;
  } 
  ::placeholder {
    color: #c3c5cd;
    font-weight: bolder;
  } 
  
`

const MyMoneyInput = styled(CurrencyFormat)`
  width: 93%;  
  height: 50px;
  border-radius: 10px 10px 2px 2px;
  border-style: solid;
  font-size: 17px;
  padding-left: 20px;
  border-color: #dddee3;
  &:focus {
    outline: none;
  } 
  ::placeholder {
    color: #c3c5cd;
    font-weight: bolder;
  } 
`


const MyDateInput = styled(DatePicker)`
  width: 86vw;
  color:#757575;  
  height: 50px;
  border-radius: 10px 10px 2px 2px;
  border-style: solid;
  font-size: 17px;
  padding-left: 20px;
  border-color: #dddee3;
  &:focus {
    outline: none;
  } 
  ::placeholder {
    color: #c3c5cd;
    font-weight: bolder;
  } 


  
`
const customStyles = {
    input: (provided, state) => {
        return { ...provided, height: '40px', borderRadius:'15px',
        };
    },
    container: (provided, state) => {
        return { ...provided, boderRadius:'15px',
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 1px 0 0 0 rgba(0, 0, 0, 0.19)",
        };
    },
    indicatorSeparator: (provided, state) => {
        return { ...provided,
            height: '100%',
            top:'10px',
            marginTop: 'unset',
            marginBottom: 'unset',
        };
    },
    indicatorsContainer: (provided, state) => {
        return { ...provided,
            width: '56px',
            background: '#f0b400',
        };
    },
    dropdownIndicator: (provided, state) => {
        return { ...provided,
            color: '#fff',
            position: 'relative',
            left: '10px'
        };
    },
    singleValue: (provided, state) => {
        return { ...provided,
            color: '#5eafbb',
        };
    },
}


const CostumInput = (props) => {
    const { label, change, value, placeholder, type='normal', options, selectedOption } = props
    return(
        <Container>
            <h2>{ label }</h2>
            { type === 'normal' && <MyInput
                type="text"
                value={ value }
                onChange={ event => change(event.target.value)}
                placeholder={ placeholder }
            /> }
            { type === 'money' &&
                <MyMoneyInput
                    thousandSeparator='.'
                    decimalSeparator=','
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix='R$ '
                    placeholder='R$ 0,00'
                    value={ value }
                    onChange={ event => change(event.target.value)}
                />
            }

            {type === 'select' &&
                <Select
                    styles={customStyles}
                    defaultValue={(selectedOption) ? options[selectedOption -1] : options[0]}
                    options={options}
                    onChange={ selectedOptions => change(selectedOptions)}
                >
                </Select>
            }
            { type === 'date' &&
            <MyDateInput
                selected={ value }
                onChange={date => change(date)}
                dateFormat="dd/MM/yyyy"
            />

            }
        </Container>
    )
}

export default CostumInput