import { Reducer } from 'redux'

// --------------------------------------------------- models
export enum APP_STATE_ACTION {
  CHANGE_APP_STATE = 'CHANGE_APP_STATE',
}

export interface AppState {
  globalCounterState: number
}

export type AppStateAction = {
  type: APP_STATE_ACTION
  payload: AppState
}

// --------------------------------------------------- initial state
export const initialState: AppState = {
  globalCounterState: 0,
}

// --------------------------------------------------- reducers
export const appState: Reducer<AppState, AppStateAction> = (
  state,
  action
) => {
  if (state) {
    switch (action.type) {
      case APP_STATE_ACTION.CHANGE_APP_STATE:
        return {
          ...state,
          ...action.payload,
        }
      default:
        return state
    }
  }
  return initialState
}

// --------------------------------------------------- actions
export const AppStateChange = (payload: AppState) => {
  return {
    type: APP_STATE_ACTION.CHANGE_APP_STATE,
    payload,
  }
}

export const setGlobalCounterState = (counter: number) => {
  return {
    type: APP_STATE_ACTION.CHANGE_APP_STATE,
    payload: {
      globalCounterState: counter,
    },
  }
}
