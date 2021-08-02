// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function Box({size, className, style, ...props}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName} ${className}`}
      style={style ? {fontStyle: 'italic', ...style} : {fontStyle: 'italic'}}
    >
      {size || 'sizeless'} {style?.background ?? ''} box
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box
        size="small"
        className="banana"
        style={{background: 'lightblue'}}
      >...and more stuff</Box>
      <Box size="medium" style={{background: 'pink'}} />
      <Box size="large" style={{background: 'orange'}} />
      <Box />
    </div>
  )
}

export default App
