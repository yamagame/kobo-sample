import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

type CounterProps = {
  state: number
  onClick: () => void
}

const Counter: React.FC<CounterProps> = ({
  state,
  onClick,
}) => {
  return (
    <>
      <p>{state}</p>
      <button onClick={onClick}>カウントアップ</button>
    </>
  )
}

function App() {
  const dispatch = useDispatch()
  const selector: any = useSelector((state) => state)
  const [
    componentCounterState,
    setComponentCounterState,
  ] = React.useState(0)
  return (
    <div>
      <Counter
        state={componentCounterState}
        onClick={() =>
          setComponentCounterState(
            componentCounterState + 1
          )
        }
      />
      <Counter
        state={selector.state.globalCounterState}
        onClick={() =>
          dispatch({
            type: 'change state',
            payload: {
              state: {
                globalCounterState:
                  selector.state.globalCounterState + 1,
              },
            },
          })
        }
      />
    </div>
  )
}

export default App
