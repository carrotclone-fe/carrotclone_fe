import produce from "immer";
import { createAction } from "redux-actions";
import { handleActions } from "redux-actions";
import { apis } from "../../shared/apis";

const STATUS = "STATUS";
const LIKE = "LIKE";

const status = createAction(STATUS, (status) => status);
const like = createAction(LIKE, (like) => like);

const initialState = {
  stat: [],
  like: false,
};

const status_DB = (postid, status) => {
  return (dispatch, getState, { history }) => {
    console.log(postid, status);

    apis
      .stateEdit(postid, status)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

const like_DB = (postId, username) => {
  return (dispatch, getState, { history }) => {
    console.log(postId, username);

    apis
      .like(postId, username)
      .then((res) => {
        console.log(res);
        dispatch(like({ postId, username }));
      })
      .catch((err) => {
        console.log(err);
      });

    // dispatch(like({ postId, username }))
  };
};

export default handleActions(
  {
    [STATUS]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, action);
      }),
    [LIKE]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, action);
      }),
  },
  initialState
);

const actionsCreators = {
  status,
  status_DB,
  like,
  like_DB,
};

export { actionsCreators };
