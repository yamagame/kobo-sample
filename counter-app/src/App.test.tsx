import React from 'react'
import { mount, configure } from 'enzyme'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

import {
  createStore as reduxCreateStore,
  Reducer,
  combineReducers,
} from 'redux'
import {
  AppState,
  GlobalState,
  AppStateAction,
} from './model'

configure({ adapter: new Adapter() })

const initialState: GlobalState = {
  appState: {
    globalCounterState: 0,
  },
}

export const appState: Reducer<AppState, AppStateAction> = (
  state,
  action
) => {
  if (state) {
    switch (action.type) {
      case 'change state':
        return {
          ...state,
          ...action.payload,
        } as AppState
      default:
        return state
    }
  }
  return initialState.appState
}

const store = reduxCreateStore(
  combineReducers({
    appState,
  }),
  initialState
)

test('renders learn react link', async () => {
  const wrapper = mount(
    <Provider store={store}>
      <App></App>
    </Provider>
  )
  console.log(wrapper)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
