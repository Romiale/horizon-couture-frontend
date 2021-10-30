import React from 'react'
import Navigation from '../../components/global_components/navigation/Navigation'
import Head from 'next/head'
import AliceCarousel from 'react-alice-carousel';
import Title from '../../components/global_components/title/Title'
import CardArticle from '../../components/global_components/card-article/CardArticle'
import CardPromotion from '../../components/global_components/card_promotion/CardPromotion'
import styles from '../categorie/style.module.scss'
function Categorie() {

    const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 4 },
    };
     const items = [
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>,
    <CardPromotion/>
  ];
    return (
        <div>
             <Head>
                <title>Create Next App</title>
                <meta name="description" content="horizon couture" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.categorie_cards}>
                <Title>TOP CATÉGORIES</Title>
                <Navigation />
                <Title>TISSUS POUR HOMMES</Title>
                <div className={styles.group_card}>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                </div>
                 <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="default"
                autoPlay="true"  
                infinite="true"  
                autoPlayInterval="4000"  
                />
                <Title>TISSUS POUR FEMMES</Title>
                <div className={styles.group_card}>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                </div>
            </main>
        </div>
    )
}

export default Categorie
