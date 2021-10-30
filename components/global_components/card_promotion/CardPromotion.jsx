import React from 'react'
import image from '../../../public/assets/images/women.png'
import styles from '../card_promotion/style.module.scss'

function CardPromotion() {
    return (
        <div className={styles.card_promotion}>
            <img src={image.src} alt="image" />
            <p>Prête pour la soirée ?</p>
        </div>
    )
}

export default CardPromotion
