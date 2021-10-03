import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_FORECAST,
} from "../../shared/constants/ActionTypes";
import Api from "../../services/ApiConfig";

// Redux-thunk action creator
export const onGetForecasts = (zipCode) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    Api.get(`api/forecast/${zipCode}`)
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_FORECAST, payload: data.data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: "Something went wrong" });
        }
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, payload: err.message });
      });
  };
};
