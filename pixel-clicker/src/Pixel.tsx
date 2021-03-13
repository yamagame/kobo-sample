import React from 'react'

type Props = {
  color?: string
  style?: React.CSSProperties
}

const defaultStyle = {
  width: 32,
  height: 32,
  border: 'solid 1px black',
  display: 'inline-block',
}

const colors = [
  '#FFF',
  '#F00',
  '#FF0',
  '#0F0',
  '#0FF',
  '#00F',
  '#F0F',
  '#000',
]

const Pixel: React.FC<Props> = ({
  color = 'red',
  style = defaultStyle,
}: Props) => {
  const [filled, setFilled] = React.useState(0)

  const componentStyle = React.useCallback(() => {
    return {
      backgroundColor: colors[filled],
      ...defaultStyle,
      ...style,
    }
  }, [color, style, filled])

  const onClick = React.useCallback(() => {
    setFilled((c) => (c + 1) % colors.length)
  }, [])

  return (
    <div onClick={onClick} style={componentStyle()}></div>
  )
}

export default Pixel
