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
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

// 초기값
const initialState = {
  list: [],
  is_loading: false,
  detailList: [],
};

// 미들 웨어
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .mainGet()
      .then((res) => {
        dispatch(setPost(res.data));
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
        history.replace("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editPostDB = (title, imageList, category, price, content, postId) => {
  return function (dispatch, getState, { history }) {
    // const fromData = new FormData();

    // fromData.append(
    //   "com",
    //   new Blob(
    //     [
    //       JSON.stringify({
    //         title: title,
    //         categoryid: parseInt(category),
    //         price: parseInt(price),
    //         content: content,
    //       }),
    //     ],
    //     {
    //       type: "application/json",
    //     }
    //   )
    // );

    // imageList.map((e, idx) => {
    //   return fromData.append("files", e);
    // });

    // fromData.forEach((e) => {
    //   console.log(e);
    // });
    apis
      .postEdit({
        title: title,
        categoryid: parseInt(category),
        price: parseInt(price),
        content: content,
      }, postId)
      .then((res) => {
        console.log(res)
        history.replace("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deletePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .postDelete(postId)
      .then((res) => {
        dispatch(deletePost(postId));
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 리덕스
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [SET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.detailList = action.payload.detail_list;
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = state.list.filter(
          (i) => i.postid !== action.payload.post_id
        );
      }),
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
