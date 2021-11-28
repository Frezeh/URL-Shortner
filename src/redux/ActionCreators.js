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

export const fetchStats = () => (dispatch) => {
  let id = localStorage.getItem('stats');
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
    .then(history => dispatch(addHistory(history)))
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

// export const addNdfSale = (stock) => ({
//     type: ActionTypes.ADD_STOCK,
//     payload: stock
//   });

// export const postNdfSale = (comment) => (dispatch) => {

//   const newSale = {
//     category: "Nova Dollar Fund",
//     value: comment,
//   };

//   const bearer = 'Bearer ' + localStorage.getItem('token');//asyn

//   return fetch(baseUrl + 'stock/buy', {
//     method: "POST",
//     body: JSON.stringify(newSale),
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': bearer
//     },
//     credentials: "same-origin"
//   })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         throw error;
//       })
//     .then(response => response.json())
//     .then(stock => { dispatch(addNdfSale(stock)); alert('Your Request Is Being Processed! '); })
//     .catch(error => { alert('Your purchase could not be posted, please Login\nError: ' + error.message); })
// };

// export const fetchNmmf = () => (dispatch) => {

//   dispatch(nmmfLoading());

//   return fetch(baseUrl + 'nmmf')
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//       })
//     .then(response => response.json())
//     .then(nmmf => dispatch(addNmmf(nmmf)))
//     .catch(error => dispatch(nmmfFailed(error.message)));
// };

// export const nmmfLoading = () => ({
//   type: ActionTypes.NMMF_LOADING
// });

// export const nmmfFailed = (errmess) => ({
//   type: ActionTypes.NMMF_FAILED,
//   payload: errmess
// });

// export const addNmmf = (nmmf) => ({
//   type: ActionTypes.ADD_NMMF,
//   payload: nmmf
// });

// export const addNmmfSale = (stock) => ({
//     type: ActionTypes.ADD_STOCK,
//     payload: stock
// });

// export const postNmmfSale = (comment) => (dispatch) => {

//   const newSale = {
//     category: "Nova Money Market Fund",
//     value: comment,
//   };

//   const bearer = 'Bearer ' + localStorage.getItem('token');//asyn

//   return fetch(baseUrl + 'stock/buy', {
//     method: "POST",
//     body: JSON.stringify(newSale),
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': bearer
//     },
//     credentials: "same-origin"
//   })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         throw error;
//       })
//     .then(response => response.json())
//     .then(stock => { dispatch(addNmmfSale(stock)); alert('Your Request Is Being Processed! ') })
//     .catch(error => { alert('Your purchase could not be posted, please Login\nError: ' + error.message) })
// };

// export const addFeedback = (feedback) => ({
//   type: ActionTypes.ADD_FEEDBACK,
//   payload: feedback
// });

// export const postFeedback = (values) => (dispatch) => {

//   const newFeedback = {
//     firstname: values.firstname,
//     lastname: values.lastname,
//     telnum: values.telnum,
//     email: values.email,
//     bvnnum: values.bvnnum,
//     address: values.address
//   };

//   return fetch(baseUrl + 'feedback', {
//     method: "POST",
//     body: JSON.stringify(newFeedback),
//     headers: {
//       "Content-Type": "application/json"
//     },
//     credentials: "same-origin"
//   })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         throw error;
//       })
//     .then(response => response.json())
//     .then(response => { dispatch(addFeedback(response)); alert('Registration Successful! Allow 24hrs for feedback.'); })
//     .catch(error => alert('Your registration could not be posted\nError: ' + error.message));
// };

// export const fetchUser = () => (dispatch) => {

//   const id = 'auth.id';
//   dispatch(userLoading());

//   return fetch(baseUrl + `users/${id}`)
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//       })
//     .then(response => response.json())
//     .then(user => dispatch(addUser(user)))
//     .catch(error => dispatch(userFailed(error.message)));
// };

// export const userLoading = () => ({
//   type: ActionTypes.USER_LOADING
// });

// export const userFailed = (errmess) => ({
//   type: ActionTypes.USER_FAILED,
//   payload: errmess
// });

// export const addUser = (user) => ({
//   type: ActionTypes.ADD_USER,
//   payload: user
// });

// export const historyLoading = () => ({
//   type: ActionTypes.HISTORY_LOADING
// });

// export const historyFailed = (errmess) => ({
//   type: ActionTypes.HISTORY_FAILED,
//   payload: errmess
// });

// export const addHistory = (user) => ({
//   type: ActionTypes.ADD_HISTORY,
//   payload: user
// });

// export const addContactFeedback = (contact) => ({
//   type: ActionTypes.ADD_CONTACT_FEEDBACK,
//   payload: contact
// });

// export const postContactFeedback = (values) => (dispatch) => {
  
//   const newFeedback = {
//     firstname: values.firstname,
//     lastname: values.lastname,
//     telnum: values.telnum, 
//     email: values.email, 
//     agree: values.agree, 
//     contactType: values.contactType, 
//     message: values.message
//   };
  
//   return fetch(baseUrl + 'contactus', {
//       method: "POST",
//       body: JSON.stringify(newFeedback),
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: "same-origin"
//   })
//   .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//     error => {
//           throw error;
//     })
//   .then(response => response.json())
//   .then(response => { dispatch(addContactFeedback(response)); alert("Your feedback has been sent, Great hearing from you"); }) 
//   .catch(error =>  error.message);
//   //.catch(error =>  alert('Your feedback could not be posted\nError: '+error.message));
// };

