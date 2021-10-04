import thunk from "redux-thunk";
import { onGetForecasts } from "./Forecast";
import "../../setupTests";
import expect from "expect";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const initialState = {
  forecasts: [],
};
const makeMockStore = (state = {}) => {
  return mockStore({
    ...initialState.forecasts,
    ...state,
  });
};

const mockSuccess = (data) => ({ status: 200, response: { data } });
const mockError = (error) => ({ status: 500, response: error });

describe("Test forecast actions", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("Fetches five-day forecast successfully", () => {
    const forecastsList = [
      {
        date: "2021-10-03 21:00:00",
        main: {
          temp: 80,
          temp_min: 70,
          temp_max: 90,
          humidity: 50,
          feel: 80,
          wind: 6,
        },
        description: "Cloudy",
        icon: "03d",
      },
    ];

    const store = makeMockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(forecastsList));
    });

    const expected = [onGetForecasts(10013)];

    return store.dispatch(onGetForecasts(10013)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expected);
    });
  });
});
