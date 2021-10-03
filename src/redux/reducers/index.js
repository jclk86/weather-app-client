import forecastReducer from "./Forecast";
import commonReducer from "./Common";

const reducers = {
  common: commonReducer,
  forecast: forecastReducer,
};

export default reducers;
