import React, { Children } from 'react'
import styles from '../button/style.module.scss'

function Button({ children, href,color }) {
     const style = {
        backgroundColor: color ? color:"",
      }
    return (
        <a href={href} style={style} className={styles.button}>
            {children}
        </a>
    )
}

export default Button
