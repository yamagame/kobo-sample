import React from 'react'
import './App.css'

function App() {
  const [
    componentCounterState,
    setComponentCounterState,
  ] = React.useState(0)
  return (
    <div>
      <p>{componentCounterState}</p>
      <button
        onClick={() =>
          setComponentCounterState(
            componentCounterState + 1
          )
        }
      >
        カウントアップ
      </button>
    </div>
  )
}

export default App
