import { createAction, handleActions } from "redux-actions";
import produce, { Immer } from "immer";

// 액션
const SET_PRE = "SET_PRE";
const INIT_PRE = "INIT_PRE";
const DEL_PRE = "DEL_PRE";
const EDIT_PRE = "EDIT_PRE";

// 액션 크리에이터

const setPre = createAction(SET_PRE, (pre, data) => ({ pre, data }));
const initPre = createAction(INIT_PRE, () => ({}));
const delPre = createAction(DEL_PRE, (index) => ({ index }));
const editPre = createAction(EDIT_PRE, (pre) => ({ pre }));

const initialState = {
  preView: [],
  files: [],
};

export default handleActions(
  {
    [SET_PRE]: (state, action) => produce(state, (draft) => {}),
    [INIT_PRE]: (state, action) => produce(state, (draft) => {}),
    [DEL_PRE]: (state, action) => produce(state, (draft) => {}),
    [EDIT_PRE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const imgActions = {
  setPre,
  initPre,
  delPre,
  editPre,
};

export { imgActions };
