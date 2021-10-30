import React from 'react'
import Navigation from '../../components/global_components/navigation/Navigation'
import Head from 'next/head'
import Title from '../../components/global_components/title/Title'
import CardArticle from '../../components/global_components/card-article/CardArticle'
import styles from '../categorie/style.module.scss'
function Categorie() {
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
            </main>
        </div>
    )
}

export default Categorie
