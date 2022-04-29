import produce from "immer";
import { createAction } from "redux-actions";
import { handleActions } from "redux-actions";
import { apis } from "../../shared/apis";
import { actionCreators as PostActions } from "./Post";

const STATUS = "STATUS";
const LIKE = "LIKE";

const setstatus = createAction(STATUS, (status) => status);
const like = createAction(LIKE, (like) => like);

const initialState = {
  stat: [],
  like: false,
};

const status_DB = (postid, status) => {
  return (dispatch, getState, { history }) => {
    apis
      .stateEdit(postid, status)
      .then((res) => {
        console.log(res);

        let new_Arr = getState().Post.list.map((v) => {
          if (v.postid === postid) {
            return { ...v, status: status };
          }

          return v;
        });

        dispatch(PostActions.setPost(new_Arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const like_DB = (postid, love) => {
  return (dispatch, getState, { history }) => {
    apis
      .like(postid)
      .then((res) => {
        console.log(res);

        let new_Arr = { ...getState().Post.detailList, love: !love };

        dispatch(PostActions.setDetail(new_Arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [STATUS]: (state, action) => produce(state, (draft) => {}),
    [LIKE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionsCreators = {
  setstatus,
  status_DB,
  like,
  like_DB,
};

export { actionsCreators };
