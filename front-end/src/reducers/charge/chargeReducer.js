import {types} from "../../actions/types"

const inicialState = {
    name: '',
    email: '',
    product_service_description: '',
    product_service_price: '',
    installment_plan: '',
    due_date: new Date(),
    charges: []
}

export default (state=inicialState, action) => {

    switch (action.type) {
        case types.GET_CHARGES:
            return {...state,
            charges: action.payload
            }
        case types.SET_NAME:
            return {...state,
            name: action.payload
            }
        case types.SET_EMAIL:
            return {...state,
            email: action.payload
            }
        case types.SET_PRODUCT_SERVICE_DESCRIPTION:
            return {...state,
            product_service_description: action.payload
            }
        case types.SET_PRODUCT_SERVICE_PRICE:
            return {...state,
            product_service_price: action.payload
            }
        case types.SET_INSTALLMENT_PLAN:
            return {...state,
            installment_plan: action.payload
            }
        case types.SET_DUE_DATE:
            return {...state,
            due_date: action.payload
            }

        default:
            return state

    }
}