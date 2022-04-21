
import produce from "immer"
import { createAction } from "redux-actions"
import { handleActions } from "redux-actions"
import { apis } from "../../shared/apis"


const LOG_IN = 'LOGIN'
const SIGN_UP = 'SIGNUP'
const CHECK = 'CHECK'

const log_in = createAction(LOG_IN, (user) => user)
const sign_up = createAction(SIGN_UP, (user) => user)
const loginCheck = createAction(CHECK, (user) => user)

const initialState = {
    list: [],
    user: null,
}

const Sign_upDB = (username, password, passwordcheck) => {
    return function (dispatch, getState, { history }) {
        apis.signup(username, password, passwordcheck)
            .then((res) => {
                console.log(res)

                dispatch(sign_up({ username, password, passwordcheck }))

                window.alert('회원가입완료 !')
                history.push('/')
            })
            .catch((err) => console.log(err))
    }
}

const Log_inDB = (username, password) => {
    return function (dispatch, getState, { history }) {
        apis.login(username, password)
            .then((res) => {
                console.log(res)

                let token = res.headers.authorization

                document.cookie = `token=${token}`

                dispatch(log_in({ username, password }))

                history.push('/main')
            })
            .catch((err) => console.log(err))
    }
}

export default handleActions(
    {
        [CHECK]: (state, action) => produce(state, (draft) => {
            draft.user = action.payload
        }),
        [SIGN_UP]: (state, action) => produce(state, (draft) => {

        }),
        [LOG_IN]: (state, action) => produce(state, (draft) => {

        }),
    }, initialState
)

const actionsCreators = {
    sign_up,
    Sign_upDB,
    log_in,
    Log_inDB,
    loginCheck,
}

export { actionsCreators };