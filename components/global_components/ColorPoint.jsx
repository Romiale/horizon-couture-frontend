import React from 'react'

function ColorPoint({color}) {

      const style = {
        height: '.8rem',
        width: '.8rem',
        marginRight:'7%',
        borderRadius:'50%',
        backgroundColor: color,
      }
    
    return (
        <div style={style}>
        </div>
    )
}

export default ColorPoint
