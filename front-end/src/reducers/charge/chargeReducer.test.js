import { types } from "../../actions/types"
import chargeReducer from "./chargeReducer";

describe('Charge Reducers', () => {

    it('Should return default state', () => {

        const newState = chargeReducer(undefined, {})
        expect(newState).toEqual([])

    })

    it('Should return new state if receiving type', () => {

        const charges = [{ title: 'teste 1'},{ title: 'teste 2'},{ title: 'teste 3'},{ title: 'teste 4'}]
        const newState = chargeReducer(undefined, {
            type: types.GET_CHARGES,
            payload: charges
        })

        expect(newState).toEqual(charges)
    })
})