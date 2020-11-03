import {
  HISTORY_FAILUER,
  HISTORY_SUCCESS,
  HISTORY_REQUEST,
  SPLIT_FAILUER,
  SPLIT_SUCCESS,
  SPLIT_REQUEST,
} from "./actionTypes";

const init = {
  loading: false,
  errMsg: "",
  successMsg: "",
  bills: [],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case SPLIT_REQUEST:
      return { ...state, loading: true };
    case SPLIT_SUCCESS:
      return {
        ...state,
        loading: false,
        successMsg: payload.message,
        bills: [...state.bills, payload.bill],
        errMsg: "",
      };
    case SPLIT_FAILUER:
      return {
        ...state,
        loading: false,
        successMsg: "",
        errMsg: payload.message,
      };
    case HISTORY_REQUEST:
      return { ...state, loading: true };
    case HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        successMsg: payload.message,
        bills: [...state.bills, payload.data],
        errMsg: "",
      };
    case HISTORY_FAILUER:
      return {
        ...state,
        loading: false,
        successMsg: "",
        errMsg: payload.message,
      };
    default:
      return state;
  }
};

export default reducer;
