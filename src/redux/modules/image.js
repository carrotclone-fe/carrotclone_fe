import { createAction, handleActions } from "redux-actions";
import produce, { Immer } from "immer";
import axios from "axios";

// 액션
const SET_PRE = "SET_PRE";
const DELETE_PRE = "DELETE_PRE";
const EDIT_PRE = "EDIT_PRE";
const INIT_PRE = "INIT_PRE";
const EDIT_URL = "EDIT_URL";
const ROAD_URL = "ROAD_URL";

// 액션 크리에이터

const setPre = createAction(SET_PRE, (data) => ({ data }));
const deletePre = createAction(DELETE_PRE, (imageId) => ({ imageId }));
const editPre = createAction(EDIT_PRE, (editImage) => ({ editImage }));
const initPre = createAction(INIT_PRE, () => ({}));
const editUrl = createAction(EDIT_URL, (Url) => ({ Url }));
const roadUrl = createAction(ROAD_URL, (data) => ({ data }));

const initialState = {
  preView: [],
  files: [],
  editUrl: [],
};

const test = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://localhost:3001/post")
      .then((res) => {
        const data = res.data;

        dispatch(editPre(data));
      })
      .catch((err) => console.log(err));
  };
};

export default handleActions(
  {
    [SET_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.files = [...state.files, ...action.payload.data];
      }),

    [DELETE_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.files = draft.files.filter(
          (i, idx) => idx !== action.payload.imageId
        );
      }),

    [EDIT_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.preView = action.payload.editImage;
      }),

    [INIT_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.preView = [];
        draft.files = [];
        draft.editUrl = [];
      }),

    [EDIT_URL]: (state, action) =>
      produce(state, (draft) => {
        draft.editUrl = [...draft.editUrl, action.payload.Url];
      }),

    [ROAD_URL]: (state, action) =>
      produce(state, (draft) => {
        draft.files = action.payload.data;
      }),
  },
  initialState
);

const imgActions = {
  setPre,
  deletePre,
  editPre,
  test,
  initPre,
  editUrl,
  roadUrl,
};

export { imgActions };
