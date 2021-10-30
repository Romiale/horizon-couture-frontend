import Link from 'next/link'
import React from 'react'
import styles from '../footer/style.module.scss'
import logo from '../../../public/assets/logos/logo_horizon.png'
import Title from '../title/Title'
import send from '../../../public/assets/logos/bytesize_send.svg'
import paypal from '../../../public/assets/logos/paypal.png'
import orange from '../../../public/assets/logos/orange.png'
import m_pesa from '../../../public/assets/logos/m_pesa.png'
import airtel from '../../../public/assets/logos/airtel.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.group_infos}>
                <img src={logo.src} alt="logo horizon" />
                <address>
                    République démocratique du congo /Kinshasa 
                </address>
                <Link href="mailto:romialengoy5@gmail.com">
                    <a>romialengoy5@gmail.com</a>
                </Link>
                <Link href="tel:+243822332932">
                    <a>+243 822332932</a>
                </Link>
            </div>
            <div className={styles.group_infos}>
                <Title>MARKET</Title>
                <Link href="/categorie/tissus">
                    <a>Tissus</a>
                </Link>
                <Link href="/categorie/garnitures">
                    <a>Garnitures</a>
                </Link>
                <Link href="/categorie/accessoirs">
                    <a>Accessoirs</a>
                </Link>
                <Link href="/categorie/buttons">
                    <a>Bouttons</a>
                </Link>
                <Link href="/categorie/créations">
                    <a>Créations</a>
                </Link>
                <Link href="tel:+243822332932">
                    <a>Astuces</a>
                </Link>
            </div>
            <div className={styles.group_infos}>
                <Title>SERVICES</Title>
                <Link href="#">
                    <a>Service client</a>
                </Link>
                <Link href="#">
                    <a>Mon compte</a>
                </Link>
            </div>
             <div className={styles.group_infos}>
                <Title>ABONNEZ-VOUS</Title>
                <p>Souscrivez à notre newsletter et recevez les informations sur les arrivages</p>
                <div className={styles.news_letter}>
                    <input type="email" placeholder="votre mail" required/>
                    <img src={send.src} alt="send"/>
                </div>
                <p>Paiement sécurisé</p>
                <div className={styles.group_mobile_money}>
                    <img src={paypal.src} alt="paypal"/>
                    <img src={m_pesa.src} alt="m-pesa"/>
                    <img src={orange.src} alt="orange"/>
                    <img src={airtel.src} alt="airtel"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
