import React from 'react'
import image from '../../../public/assets/images/tissu.png'
import styles from '../card-article/style.module.scss'
import ColorPoint from '../ColorPoint'

function CardArticle() {
    return (
        <div className={styles.card_article}>
            <div className={styles.card_image}>
                <img src={image.src} alt="tissu"/>
            </div>
            <div className={styles.group_color}>
                <ColorPoint color={"#000"}/>
                <ColorPoint color={"rgb(84, 170, 166)"}/>
                <ColorPoint color={"rgb(240, 23, 23)"}/>
                <ColorPoint color={"rgb(23, 124, 240)"}/>
            </div>
            <p>Tissu chemise homme</p>
            <span>$ 39,99</span>
        </div>
    )
}

export default CardArticle
