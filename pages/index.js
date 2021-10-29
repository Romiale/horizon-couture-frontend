import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import pub from '../public/assets/images/pub.png'
import gray from '../public/assets/images/gray.png'
import green from '../public/assets/images/green.png'
import Navigation from '../components/global_components/navigation/Navigation'
import Title from '../components/global_components/title/Title'
import Button from '../components/global_components/button/Button'
import CardArticle from '../components/global_components/card-article/CardArticle'
import pubMod from '../public/assets/images/pubMod.png'
import AliceCarousel from 'react-alice-carousel';
import Baniere from '../components/global_components/baniere/BaniereItem'
import ArticlePub from '../components/global_components/ArticlesPub/ArticlePub'

export default function Home() {
  
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = [
    <Baniere image={pub} href="/"/>,
    <Baniere image={gray} href="/"/>,
    <Baniere image={green} href="/"/>
  ];
  const pups = [
    <ArticlePub image={pubMod} href="/"/>,
    <ArticlePub image={pubMod} href="/"/>,
    <ArticlePub image={pubMod} href="/"/>
  ]
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="horizon couture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="default"
        autoPlay="true"  
        infinite="true"  
        autoPlayInterval="4000"  
        />
        
        <div className={styles.main_container}>
            <Title>TOP CATÉGORIES</Title>
            <Navigation />
            <div className={styles.top_categories}>
              <div className={styles.first_container}>
                  <h3>TISSUS POUR FEMMES</h3>
                  <p>+675 articles</p>
                  <Button>Découvrez la catégorie</Button>
              </div>
              <div className={styles.second_container}>
                  <div className={styles.man}>
                  <h3>TISSUS POUR HOMMES</h3>
                  <Button href={"/#"}>Découvrir</Button>
                  </div>
                  <div className={styles.deco_dress}>
                      <div className={styles.deco}> 
                      </div>
                      <div className={styles.dress}>
                      </div>
                  </div>
              </div>
            </div>
            <Title>TOP DES PRODUITS LES PLUS NOTÉS</Title>
            <div className={styles.card_group}>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
            </div>
            <div className={styles.pup}>
                   <AliceCarousel
                    mouseTracking
                    items={pups}
                    responsive={responsive}
                    controlsStrategy="default"
                    autoPlay="true"  
                    infinite="true"  
                    autoPlayInterval="4000"  
                   />
            </div>
            <Title>NOUVELLES ARRIVAGES</Title>
             <div className={styles.card_group}>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
              <CardArticle/>
            </div>
        </div>
      </main>
    </div>
  )
}
