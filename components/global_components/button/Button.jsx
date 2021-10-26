import React, { Children } from 'react'
import styles from '../button/style.module.scss'

function Button({children,href}) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    )
}

export default Button
