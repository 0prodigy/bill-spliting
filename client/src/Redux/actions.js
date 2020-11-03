import axios from "axios";
import {
  HISTORY_FAILUER,
  HISTORY_SUCCESS,
  HISTORY_REQUEST,
  SPLIT_FAILUER,
  SPLIT_SUCCESS,
  SPLIT_REQUEST,
} from "./actionTypes";

const getHistory = (id) => async (dispatch) => {
  dispatch({ type: HISTORY_REQUEST, payload: "" });

  try {
    let res = await axios
      .get(
        "http://localhost:5000/api/user/history/1432f36c-0fbb-4f4e-a2db-b4c01b26b5bc",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data);
    dispatch({ type: HISTORY_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: HISTORY_FAILUER, payload: err.response.data });
  }
};
const split = (data) => async (dispatch) => {
  dispatch({ type: SPLIT_REQUEST, payload: "" });

  try {
    let res = await axios
      .post("http://localhost:5000/api/bills/split", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
    dispatch({ type: SPLIT_SUCCESS, payload: res });
    dispatch(getHistory());
  } catch (err) {
    dispatch({ type: SPLIT_FAILUER, payload: err.response.data });
  }
};

export { split, getHistory };
