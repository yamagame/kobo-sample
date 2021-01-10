import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  GlobalState,
  AppState,
  AppStateChange,
} from './model'

type CountUpProps = {
  label: string
  state: number
  onClick: () => void
}

const CountUp: React.FC<CountUpProps> = ({
  label,
  state,
  onClick,
}) => {
  return (
    <>
      <p>
        {state} ({label})
      </p>
      <button onClick={onClick}>カウントアップ</button>
    </>
  )
}

function Counter() {
  const dispatch = useDispatch()
  const state = useSelector<GlobalState, AppState>(
    (state) => state.appState
  )
  const [
    componentCounterState,
    setComponentCounterState,
  ] = React.useState(0)
  return (
    <>
      <CountUp
        label="コンポーネントステート"
        state={componentCounterState}
        onClick={() =>
          setComponentCounterState(
            componentCounterState + 1
          )
        }
      />
      <CountUp
        label="グローバルステート"
        state={state.globalCounterState}
        onClick={() =>
          dispatch(
            AppStateChange({
              globalCounterState:
                state.globalCounterState + 1,
            })
          )
        }
      />
    </>
  )
}

export default Counter
