import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { rootReducer } from './redux';
import { createStore } from 'redux';


/////////////
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './saga';
import { applyMiddleware } from 'redux';


const sagaMiddleware = createSagaMiddleware()

export const myStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  // </React.StrictMode>
);


reportWebVitals();
