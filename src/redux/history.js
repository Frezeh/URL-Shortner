import * as ActionTypes from "./ActionTypes";

export const history = (
  state = {
    isLoading: true,
    errMess: null,
    isCorrectLink: localStorage.getItem("stat") ? true : false,
    history: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_HISTORY:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        isCorrectLink: true,
        history: action.payload,
      };

    case ActionTypes.HISTORY_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        isCorrectLink: false,
        history: [],
      };

    case ActionTypes.HISTORY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        isCorrectLink: false,
      };

    default:
      return state;
  }
};
