import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore } from 'redux'
import {
  appState,
  initialState,
  AppState,
} from './appState'
import { composeWithDevTools } from 'redux-devtools-extension'

export type GlobalState = AppState

const store = reduxCreateStore(
  appState,
  initialState,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
