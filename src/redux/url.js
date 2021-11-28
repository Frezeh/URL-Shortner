import * as ActionTypes from './ActionTypes';

export const url = (state  = { isLoading: true,
                                    errMess: null,
                                    url:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_URL:
        return {...state, isLoading: false, errMess: null, url: action.payload};

        case ActionTypes.URL_LOADING:
            return {...state, isLoading: true, errMess: null, url: []}

        case ActionTypes.URL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
    }
};