import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore as reduxCreateStore, Reducer } from "redux";

interface AppState {
  state: any;
}

export type Action = {
  type: "change state";
  payload: AppState;
};

export const appState: Reducer<AppState, Action> = (state, action) => {
  if (state) {
    switch (action.type) {
      case "change state":
        return {
          ...state,
          ...action.payload,
        } as AppState;
      default:
        return state;
    }
  }
  return { state: "" };
};

const store = reduxCreateStore(appState, { state: "" });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
