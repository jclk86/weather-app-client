import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from "../../shared/constants/ActionTypes";

export const fetchStart = () => {
  return (dispatch) => dispatch({ type: FETCH_START });
};

export const fetchSuccess = () => {
  return (dispatch) => dispatch({ type: FETCH_SUCCESS });
};

export const fetchError = (error) => {
  return (dispatch) => dispatch({ type: FETCH_ERROR, payload: error });
};
