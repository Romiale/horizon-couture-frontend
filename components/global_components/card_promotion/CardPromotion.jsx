import Link from 'next/link'
import React from 'react'
import styles from '../card_promotion/style.module.scss'

function CardPromotion({title,image}) {
    return (
        <Link href="/categorie/articles">
            <a className={styles.card_promotion_wrapper}>
                <div className={styles.card_promotion}>
                <img src={image.src} alt="image" />
                <p>{title}</p>
                </div>
            </a>
        </Link>
    )
}

export default CardPromotion
