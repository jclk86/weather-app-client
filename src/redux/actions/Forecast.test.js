import thunk from "redux-thunk";
import Forecast from "./Forecast";
import "../../setupTests";
import expect from "expect";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const initialState = {
  forecasts: [],
};

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

describe("Test forecast actions", () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Fetches five-day forecast successfully", () => {
    // Tests if thunk dispatches properly
    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            date: "2021-10-02 21:00:00",
            main: {
              temp: 60,
              temp_min: 40,
              temp_max: 70,
              humidity: 10,
              feel: 50,
              wind: 6,
            },
            description: "Cloudy",
            icon: "03d",
          },
        ],
      });

      const expectedActions = [
        {
          type: "GET_FORECAST",
          forecasts: forecastsList,
        },
        {
          type: "FETCH_START",
        },
        {
          type: "FETCH_SUCCESS",
        },
      ];

      return store.dispatch(Forecast.onGetForecasts).then(() => {
        const actualAction = store.getActions();
        expect(actualAction).toEqual(expectedActions);
      });
    });
  });
});
