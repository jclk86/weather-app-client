import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from "../../shared/constants/ActionTypes";

const INIT_STATE = {
  error: "",
  loading: false,
  message: "",
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: "", message: "", loading: true };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: "",
        message: "",
        loading: false,
        updatingContent: false,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "",
        updatingContent: false,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
