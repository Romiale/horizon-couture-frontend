import React from 'react'
import styles from '../title/style.module.scss'

function Title({ children,color }) {
    const style = {
        color:color?color:''
    }
    return (
        <h2 className={styles.title} style={style}>
            {children}
        </h2>
    )
}

export default Title
