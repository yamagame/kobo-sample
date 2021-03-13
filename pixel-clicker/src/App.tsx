import React from 'react'
import './App.css'
import Pixel from './Pixel'

type Props = {
  width?: number
  height?: number
}

const PixelLine: React.FC<Props> = ({ width }: Props) => {
  return (
    <div>
      {[...Array(width)].map((v, i) => (
        <Pixel key={i} />
      ))}
    </div>
  )
}

const PixelArea: React.FC<Props> = ({
  width,
  height,
}: Props) => {
  return (
    <>
      {[...Array(height)].map((v, i) => (
        <PixelLine key={i} width={width} />
      ))}
    </>
  )
}

const App: React.FC = () => {
  return (
    <div className="text-yellow-600 text-center pt-16">
      <PixelArea width={8} height={2} />
      <PixelArea width={4} height={4} />
      <PixelArea width={8} height={2} />
    </div>
  )
}

export default App
