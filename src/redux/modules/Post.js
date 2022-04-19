import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/apis";
import axios from "axios";

// 액션
const SET_POST = "SET_POST";
const SET_DETAIL = "SET_DETAIL";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// 액션 크리에이터
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setDetail = createAction(SET_DETAIL, (detail_list) => ({ detail_list }));
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const editPost = createAction(EDIT_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (post_list) => ({ post_list }));

// 초기값
const initialState = {
  list: [],
  is_loading: false,
  detailList: [],
};
const initialPost = {
  title: "제목",
  content: "내용",
  imgaeList: [],
};

// 미들 웨어
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .mainGet()
      .then((res) => {
        dispatch(setPost(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDetailDB = (postid) => {
  return function (dispatch, getState, { history }) {
    apis
      .detailPost(postid)
      .then((res) => {
        dispatch(setDetail(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostDB = (title, imageList, category, price, content, username) => {
  return function (dispatch, getState, { history }) {
    const fromData = new FormData();

    fromData.append(
      "com",
      new Blob(
        [
          JSON.stringify({
            title: title,
            categoryid: parseInt(category),
            price: parseInt(price),
            content: content,
            username: username,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    imageList.map((e, idx) => {
      return fromData.append("files", e);
    });

    // fromData.forEach((e) => {
    //   console.log(e);
    // });
    apis
      .postWrite(fromData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editPostDB = () => {
  return function (dispatch, getState, { history }) {};
};

const deletePostDB = () => {
  return function (dispatch, getState, { history }) {};
};

// 리덕스
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(draft.list);
      }),
    [SET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.detailList = action.payload.detail_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {}),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  getPostDB,
  setDetail,
  getDetailDB,
  addPost,
  addPostDB,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
};

export { actionCreators };
