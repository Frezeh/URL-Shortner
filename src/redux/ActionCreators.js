import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';

export const addUrl = (url) => ({
  type: ActionTypes.ADD_URL,
  payload: url
});

export const postUrl = (url) => (dispatch) => {

  const newUrl = {
    longUrl: url,
  };

  return fetch(baseUrl + 'url', {
    method: "POST",
    body: JSON.stringify(newUrl),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(url => { 
        localStorage.setItem('code', url.urlCode);
      dispatch(addUrl(url)); })
    .catch(error => { alert('Your URL could not be shortened\nError: ' + error.message); });
};

export const fetchStats = (id) => (dispatch) => {
  // let id = localStorage.getItem('stats');
  dispatch(historyLoading());

  return fetch(baseUrl + `history/${id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(history => { 
      localStorage.setItem('stats', history.id)
      dispatch(addHistory(history))
    })
    .catch(error => dispatch(historyFailed(error.message)));
};

export const historyLoading = () => ({
  type: ActionTypes.HISTORY_LOADING
});

export const historyFailed = (errmess) => ({
  type: ActionTypes.HISTORY_FAILED,
  payload: errmess
});

export const addHistory = (history) => ({
  type: ActionTypes.ADD_HISTORY,
  payload: history
});