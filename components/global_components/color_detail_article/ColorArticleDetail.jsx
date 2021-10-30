import React from 'react'
import ColorArticle from '../ColorPoint'
import styles from '../color_detail_article/style.module.scss'

function ColorArticleDetail({color}) {
    return (
    <div className={styles.colorArticleDetail}>
        <ColorArticle color={color} height="1.1rem" width="1.1rem"/>
        <input className={styles.input_color} type="radio" id="dewey" name="drone" value={color}/>
    </div>                
        
    )
}

export default ColorArticleDetail
