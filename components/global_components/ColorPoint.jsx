import React from 'react'

function ColorPoint({color,height,width}) {

      const style = {
        height: height,
        width: width,
        borderRadius:'50%',
        backgroundColor: color,
      }
    
    return (
        <div style={style}>
        </div>
    )
}

export default ColorPoint
