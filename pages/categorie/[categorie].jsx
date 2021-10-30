import React from 'react'
import Navigation from '../../components/global_components/navigation/Navigation'
import Head from 'next/head'
import AliceCarousel from 'react-alice-carousel';
import Title from '../../components/global_components/title/Title'
import CardArticle from '../../components/global_components/card-article/CardArticle'
import CardPromotion from '../../components/global_components/card_promotion/CardPromotion'
import styles from '../categorie/style.module.scss'
import image1 from '../../public/assets/images/man.png'
import image2 from '../../public/assets/images/women.png'
import image3 from '../../public/assets/images/WHITE_homme-africain-vetements-de-mode-t-shirt_variants-0-300x300.jpeg'
import image4 from '../../public/assets/images/index.jpeg'

function Categorie() {

    const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 4 },
    };
     const items = [
    <CardPromotion image={image1} title="fashion pour homme"/>,
    <CardPromotion image={image2} title="prête pour la soirée ?"/>,
    <CardPromotion image={image3} title="afrika fashion man"/>,
    <CardPromotion image={image4} title="fashion pour femme"/>,
    <CardPromotion image={image1} title="fashion pour homme"/>,
    <CardPromotion image={image2} title="prête pour la soirée ?"/>,
    <CardPromotion image={image3} title="afrika fashion man"/>,
    <CardPromotion image={image4} title="fashion pour femme" />,
    <CardPromotion image={image1} title="fashion pour homme"/>,
    <CardPromotion image={image2} title="prête pour la soirée ?"/>,
    <CardPromotion image={image3} title="afrika fashion man"/>,
    <CardPromotion image={image4} title="fashion pour femme"/>,
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
                <Title color={"#DA1E1E"}>TOP PROMO</Title>
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
