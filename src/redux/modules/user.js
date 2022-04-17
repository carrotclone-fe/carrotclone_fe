
import produce from "immer"
import { createAction } from "redux-actions"
import { handleActions } from "redux-actions"
import { apis } from "../../shared/apis"


const LOG_IN = 'LOGIN'
const SIGN_UP = 'SIGNUP'

const log_in = createAction(LOG_IN, (user) => user)
const sign_up = createAction(SIGN_UP, (user) => user)

const initialState = {
    list: [],
}

const Sign_upAXI = (username, password, passwordcheck) => {
    return function (dispatch, getState, { history }) {
        console.log(username, password, passwordcheck)

        apis.signup(username, password, passwordcheck).then((res) => console.log(res))

        dispatch(sign_up({ username, password, passwordcheck }))
    }
}

const Log_inAXI = (username, password) => {
    return function (dispatch, getState, { history }) {
        console.log(username, password)

        apis.login(username, password).then((res) => console.log(res))

        dispatch(log_in({ username, password }))
    }
}

export default handleActions({
    [SIGN_UP]: (state, action) => produce(state, (draft) => {
        console.log(state, action)

    }),
    [LOG_IN]: (state, action) => produce(state, (draft) => {
        console.log(state, action)

    }),
}, initialState)

const actionsCreators = {
    sign_up,
    Sign_upAXI,
    log_in,
    Log_inAXI,
}

export { actionsCreators };