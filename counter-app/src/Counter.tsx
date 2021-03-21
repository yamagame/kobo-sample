import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, setGlobalCounterState } from './appState'
import { GlobalState } from './index'

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
    <div className="rounded border-2 m-2 p-1">
      <div className="text-center text-sm">{label}</div>
      <div className="text-center">{state}</div>
      <button
        className="block rounded bg-blue-400 px-2 py-1 m-1 text-white mx-auto"
        onClick={onClick}
      >
        カウントアップ
      </button>
    </div>
  )
}

function Counter() {
  const dispatch = useDispatch()
  const state = useSelector<GlobalState, AppState>(
    (state) => state
  )
  const [
    componentCounterState,
    setComponentCounterState,
  ] = React.useState(0)
  return (
    <div className="border-2 inline-block m-2">
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
            setGlobalCounterState(
              state.globalCounterState + 1
            )
          )
        }
      />
    </div>
  )
}

export default Counter
