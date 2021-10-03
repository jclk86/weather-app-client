import { GET_FORECAST } from "../../shared/constants/ActionTypes";

const initialState = {
  forecasts: [],
};

export default function forecastReducer(
  state = initialState.forecasts,
  action
) {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecasts: action.payload,
      };
    default:
      return state;
  }
}
