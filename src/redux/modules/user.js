
import produce from "immer"
import { createAction } from "redux-actions"
import { handleActions } from "redux-actions"


const LOG_IN = 'LOGIN'
const SIGN_UP = 'SIGNUP'

const log_in = createAction(LOG_IN, (user) => user)
const sign_up = createAction(SIGN_UP, (user) => user)

const initialState = {
    list: [],
}

const Sign_upAXI = (user_info) => {
    return function (dispatch, getState, { history }) {
        console.log(user_info)
    }
}

const Log_inAXI = (user_info) => {
    return function (dispatch, getState, { history }) {
        console.log(user_info)
    }
}

export default handleActions({
    [SIGN_UP]: (state, action) => produce(state, (draft) => {

    }),
    [LOG_IN]: (state, action) => produce(state, (draft) => {

    }),
}, initialState)

const actionsCreators = {
    sign_up,
    Sign_upAXI,
    log_in,
    Log_inAXI,
}

export { actionsCreators };