import React from 'react'
import Link from 'next/link'
import image from '../../../public/assets/images/tissu.png'
import styles from '../card-article/style.module.scss'
import ColorPoint from '../ColorPoint'
import Star from '../Star'

function CardArticle() {
  
    return (
        <Link href="/detail_article/index" >
            <a className={styles.card_wrapper}>
                <div className={styles.card_article}>
                    <div className={styles.card_image}>
                        <img src={image.src} alt="tissu"/>
                    </div>
                    <div className={styles.group_notation}>
                    <div className={styles.group_color}>
                        <ColorPoint color={"#000"} height=".8rem" width=".8rem"/>
                        <ColorPoint color={"rgb(84, 170, 166)"} height=".8rem" width=".8rem"/>
                        <ColorPoint color={"rgb(240, 23, 23)"} height=".8rem" width=".8rem"/>
                        <ColorPoint color={"rgb(23, 124, 240)"} height=".8rem" width=".8rem"/>
                    </div>
                    <div className={styles.notations}>
                        <Star color={"rgb(240, 23, 23)"}/>
                        <Star color={"rgb(240, 23, 23)"}/>
                        <Star color={"rgb(240, 23, 23)"}/>
                        <Star color={"rgb(240, 23, 23)"}/>
                        <Star color={"#C4C4C4"}/>
                    </div>    
                    </div>    
                    <p>Tissu chemise homme</p>
                    <span>$ 39,99</span>
                </div>
            </a>    
        </Link>    
    )
}

export default CardArticle
