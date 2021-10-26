import React from 'react'

function Star({color}) {
    const style = {
        height: '.8rem',
        width: '.8rem',
        marginRight:'5%',
        borderRadius:'50%',
        backgroundColor: color,
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    }

    return (
        <div style={style}>
            
        </div>
    )
}

export default Star
