import { ACTIONS } from "../actions/forecast";

const initialState = {
  forecasts: [],
};

export default function forecastReducer(
  forecasts = initialState.forecasts,
  action
) {
  switch (action.type) {
    case ACTIONS.FETCH_FORECAST:
      return action.payload;
    default:
      return forecasts;
  }
}
