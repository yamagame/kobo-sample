import { Provider } from 'react-redux'
import App from './App'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import { createStore as reduxCreateStore } from 'redux'

import { initialState, appState } from './appState'

const store = reduxCreateStore(appState, initialState)

let container: Element | null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container!)
  container!.remove()
})

test('renders counte app', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>,
      container
    )
  })
  expect(pretty(container!.innerHTML)).toMatchSnapshot(
    'App'
  )
})
