import React from 'react'
import styles from '../ArticlesPub/style.module.scss'
import Button from '../button/Button'

function ArticlePub({image,href}) {
    return (
        <div className={styles.pubArticle}>
            <img src={image.src} alt="pup" /> 
            <Button href={href}>Découvrir</Button>
        </div>
    )
}

export default ArticlePub
