import React from 'react'
import styles from '../baniere/style.module.scss'
import Button from '../button/Button'

function BaniereItem({image,href}) {
    return (
        <div className={styles.item}>
            <img src={image.src} alt="pub" />
            <Button href={href}>Découvrir</Button>
        </div>
    )
}

export default BaniereItem
