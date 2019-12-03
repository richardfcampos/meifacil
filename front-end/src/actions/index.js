import { types} from "./types"
import api from '../api'


export const fetchCharges = async (dispatch) => {
        api.get('/charges')
            .then( res => {
                return (
                    dispatch({
                    type: types.GET_CHARGES,
                    payload: res.data
                })
                )
            })
            .catch(err => {
                console.log(err)
            })
}

export const setName = async (dispatch, payload) => {
    await dispatch({
        type: types.SET_NAME,
        payload: payload
    })
}

export const setEmail = async (dispatch, payload) => {
    await dispatch({
        type: types.SET_EMAIL,
        payload: payload
    })
}

export const setProductServiceDescription = async (dispatch, payload) => {
    await dispatch({
        type: types.SET_PRODUCT_SERVICE_DESCRIPTION,
        payload: payload
    })
}

export const setProductServicePrice = async (dispatch, payload) => {
    await dispatch({
        type: types.SET_PRODUCT_SERVICE_PRICE,
        payload: payload
    })
}

export const setDueDate = async (dispatch, payload) => {
    await dispatch({
        type: types.SET_DUE_DATE,
        payload: payload
    })
}

export const setInstallmentPlan = async (dispatch, payload) => {
    await dispatch({
        type: types.SET_INSTALLMENT_PLAN,
        payload: payload
    })
}

export const saveCharge = async (dispatch, payload) => {
    api.post('/charge', payload)
        .then( res => {
            return (
                dispatch({
                    type: types.SET_lAST_CHARGE,
                    payload: res.data
                })
            )
        })
        .catch(err => {
            console.log(err)
        })
}