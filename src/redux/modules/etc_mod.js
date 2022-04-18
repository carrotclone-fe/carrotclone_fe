
import produce from "immer"
import { createAction } from "redux-actions"
import { handleActions } from "redux-actions"
import { apis } from "../../shared/apis"


const STATUS = 'STATUS'
const LIKE = 'LIKE'


const status = createAction(STATUS, (status) => status)
const like = createAction(LIKE, (like) => like)



const initialState = {
    stat: [],
    like: false,
}

const status_AXI = (postId, username, status) => {
    return (dispatch, getState, { history }) => {
        console.log(postId, username, status)

        // apis.like(postId, username, status).then((res) => console.log(res))

        dispatch(status({ postId, username, status }))
    }
}

const like_AXI = (postId, username) => {
    return (dispatch, getState, { history }) => {
        console.log(postId, username)

        // apis.like(postId, username).then((res) => console.log(res))

        dispatch(like({ postId, username }))
    }
}

export default handleActions({
    [STATUS]: (state, action) => produce(state, (draft) => {
        console.log(state, action)

    }),
    [LIKE]: (state, action) => produce(state, (draft) => {
        console.log(state, action)

    }),
}, initialState)

const actionsCreators = {
    status,
    status_AXI,
    like,
    like_AXI,
}

export { actionsCreators };