import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/apis";

// 액션
const SET_POST = "SET_POST";
const SET_DETAIL = "SET_DETAIL";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// 액션 크리에이터
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setDetail = createAction(SET_DETAIL, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const editPost = createAction(EDIT_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (post_list) => ({ post_list }));

// 초기값
const initialState = {
  list: [],
  is_loading: false,
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDetailDB = () => {
  return function (dispatch, getState, { history }) {};
};

const addPostDB = (title, imageList, category, price, content) => {
  return function (dispatch, getState, { history }) {
    const fromData = new FormData();

    // fromData.append("title", title);
    // fromData.append("category", category);
    // fromData.append("price", price);
    // fromData.append("content", content);
    fromData.append(
      "requestDto",
      new Blob(
        [
          JSON.stringify({
            title: title,
            category: category,
            price: price,
            content: content,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    let imageArr = imageList.map((e, idx) => {
      return {
        imageid: idx,
        imageurl: e,
      };
    });
    console.log(imageArr);

    imageArr.map((e, idx) => {
      return fromData.append("list", e);
    });

    fromData.forEach((e) => {
      console.log(e);
    });

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
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [SET_DETAIL]: (state, action) => produce(state, (draft) => {}),
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
