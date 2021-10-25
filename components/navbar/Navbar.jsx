import React from 'react'
import Link from 'next/link'
import logo from "../../public/assets/logos/logo_horizon.svg"
import cart from "../../public/assets/logos/bx_bxs-cart.svg"
import user from "../../public/assets/logos/carbon_user-avatar.svg"
import styles from "../navbar/navbar.module.scss"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a className={styles.logo}>
                    <img src={logo.src} alt="logo horizon couture" />
                </a>
            </Link>
            <input type="text" placeholder="Rechercher un article" />
            <Link href="#">
                <a>Dévenir vendeur</a>
            </Link>
            <img src={cart.src} alt="cart"/>
            <img src={user.src} alt="user"/>
        </div>
    )
}

export default Navbar
