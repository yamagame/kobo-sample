import './App.css'
import Counter from './Counter'

function App() {
  return (
    <div className="container mx-auto p-2">
      <div className="flex justify-center">
        <Counter />
        <Counter />
      </div>
      <div className="flex justify-center">
        <Counter />
        <Counter />
      </div>
    </div>
  )
}

export default App
