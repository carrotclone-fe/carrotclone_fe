import { createAction, handleActions } from "redux-actions";
import produce, { Immer } from "immer";

// 액션
const SET_PRE = "SET_PRE";
const DELETE_PRE = "DELETE_PRE";

// 액션 크리에이터

const setPre = createAction(SET_PRE, (data) => ({ data }));
const deletePre = createAction(DELETE_PRE, (imageId) => ({ imageId }));

const initialState = {
  preView: [],
  files: [],
};

export default handleActions(
  {
    [SET_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.files = action.payload.data;
        console.log(draft.files);
      }),
    [DELETE_PRE]: (state, action) =>
      produce(state, (draft) => {
        draft.files = draft.files.filter(
          (i, idx) => idx !== action.payload.imageId
        );
        console.log(state.files);
        console.log(action.payload);
      }),
  },
  initialState
);

const imgActions = {
  setPre,
  deletePre,
};

export { imgActions };
