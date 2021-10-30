import { useState } from 'react'
import {useRouter} from 'next/router'
import ReactImageMagnify from 'react-image-magnify';
import Title from '../../components/global_components/title/Title'
import Head from 'next/head'
import CardArticle from '../../components/global_components/card-article/CardArticle'
import Button from '../../components/global_components/button/Button'
import ArrowLeft from '../../public/assets/logos/arrow_left.svg'
import styles from '../../pages/detail_article/detailsArticle.module.scss'
import DetailColor from '../../components/global_components/color_detail_article/ColorArticleDetail'
import image from '../../public/assets/images/tissu.png'
import image1 from '../../public/assets/images/images.jpeg'
import image2 from '../../public/assets/images/ku.jpeg'
import cart from '../../public/assets/logos/cart.svg'

function index() {

    const [imagePath, setImagePath] = useState(image)
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="horizon couture" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                <div className={styles.details_article}>
                    <div className={styles.article__images}>
                        <div className={styles.miniatures}>
                            <img src={image.src} alt="image" onClick={()=>setImagePath(image) }/>
                            <img src={image1.src} alt="image" onClick={()=>setImagePath(image1) }/>
                            <img src={image2.src} alt="image" onClick={()=>setImagePath(image2) }/>
                        </div>
                        <div className={styles.principal}>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    width: 480,
                                    height: 380,
                                    src: imagePath.src,
                                },
                                largeImage: {
                                    src: imagePath.src,
                                    width: 900,
                                    height: 800
                                }
                            }} />
                        </div>
                    </div>
                    <div className={styles.article__comment}>
                        <span onClick={()=>router.back()}> <img src={ArrowLeft.src} alt="arrow left"/> Retour</span>
                        <h2>Tissu mettrage fleuri dame</h2>
                        <p>$ 39,99 / M</p>
                        <p className={styles.article__comment__title}>Tissu mettrage en polyester stretch passable pour tout type de vétement mettrage en polyester stretch passable pour tout type de vétement  mettrage en polyester stretch passable pour tout type de vétement</p>
                        <div className={styles.quantity}>
                            <span>Quantité : </span>
                            <input type="number" defaultValue="0"/>
                            <Button color="#000">Ajouter au panier <img className={styles.cart_logo} src={cart.src} alt="cart" /></Button>
                        </div>
                         <div className={styles.group_color}>
                                <DetailColor color={"#000"} />
                                <DetailColor color={"#033"}/>
                                <DetailColor color={"#045"}/>
                                <DetailColor color={"rgb(240, 23, 23)"}/>
                                <DetailColor color={"#780"}/>
                                <DetailColor color={"#000"}/>
                                <DetailColor color={"rgb(240, 23, 23)"}/>
                                <DetailColor color={"#000"}/>
                                <DetailColor color={"#000"}/>
                            </div>
                    </div>
                </div>
                <Title>ARTICLES SIMILAIRES</Title>
                <div className={styles.group_article}>
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

export default index
