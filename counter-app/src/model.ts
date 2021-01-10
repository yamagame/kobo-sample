export interface AppState {
  globalCounterState: number
}

export interface GlobalState {
  appState: AppState
}

export type AppStateAction = {
  type: 'change state'
  payload: AppState
}

export const AppStateChange = (payload: AppState) => {
  return {
    type: 'change state',
    payload,
  }
}
