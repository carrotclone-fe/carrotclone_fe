import { createAction, handleActions } from "redux-actions";
import produce, { Immer } from "immer";

// 액션
const SET_PRE = "SET_PRE";
const DELETE_PRE = "DELETE_PRE";
const EDIT_PRE = "EDIT_PRE";
const INIT_PRE = "INIT_PRE"

// 액션 크리에이터

const setPre = createAction(SET_PRE, (data) => ({ data }));
const deletePre = createAction(DELETE_PRE, (imageId) => ({ imageId }));
const editPre = createAction(EDIT_PRE, (editImage) => ({ editImage }));
const initPre = createAction(INIT_PRE, (pre) => ({ pre }))

const initialState = {
  preView: [],
  files: [],
};

export default handleActions(
  {
    [SET_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.files = [...action.payload.data];
      }),
    [DELETE_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.files = draft.files.filter(
          (i, idx) => idx !== action.payload.imageId
        );
      }),
    [EDIT_PRE]: (state, action) => produce(state, (draft) => {}),
    [INIT_PRE]: (state, action) => produce(state, (draft) => {
      draft.files = null;
    }),
  },
  initialState
);

const imgActions = {
  setPre,
  deletePre,
  editPre,
  initPre,
};

export { imgActions };
