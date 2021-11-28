import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);