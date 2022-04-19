
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
        console.log(username, password, passwordcheck)

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
        console.log(username, password)

        // let testToken = 'BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTA1NTY1MzIsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6ImFzZGYifQ.G-5GMRJsgyg2EQ0G26Jf8Cx68430Qy8NQ92pneZC51M'

        // let token = testToken

        // document.cookie = `token=${token}`

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
            // console.log(state, action)
            draft.user = action.payload
        }),
        [SIGN_UP]: (state, action) => produce(state, (draft) => {
            console.log(state, action)

        }),
        [LOG_IN]: (state, action) => produce(state, (draft) => {
            console.log(state, action)

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