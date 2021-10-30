import React from 'react'
import Link from 'next/link'
import styles from '../navigation/style.module.scss'


function Navigation() {
    return (
        <div className={styles.navigation}>
            <Link href="/categorie/Tissus">
                <a>Tissus</a>
            </Link>
            <Link href="/categorie/garnitures">
                <a>Garnitures</a>
            </Link>
            <Link href="/categorie/bouttons">
                <a>Bouttons</a>
            </Link>
            <Link href="/categorie/accessoirs">
                <a>Accessoirs</a>
            </Link>
            <Link href="/categorie/décoration">
                <a>Décoration</a>
            </Link>
            <Link href="/categorie/créations">
                <a>Créations</a>
            </Link>
            <Link href="/categorie/astuces">
                <a>Astuces</a>
            </Link>
        </div>
    )
}

export default Navigation
