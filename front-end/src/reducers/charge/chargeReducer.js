import {types} from "../../actions/types"
import { type } from 'os'

export default (state=[], action) => {

    switch (action.type) {
        case types.GET_CHARGES:
            return action.payload
        default:
            return state

    }
}