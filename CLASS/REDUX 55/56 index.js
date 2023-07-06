import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { rootReducer } from './redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';



export const myStore = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  // </React.StrictMode>
);


reportWebVitals();
