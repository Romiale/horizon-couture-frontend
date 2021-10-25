import React from 'react'
import Link from 'next/link'
import styles from '../navigation/style.module.scss'


function Navigation() {
    return (
        <div className={styles.navigation}>
            <Link href="#">
                <a>Tissus</a>
            </Link>
            <Link href="#">
                <a>Garnitures</a>
            </Link>
            <Link href="#">
                <a>Bouttons</a>
            </Link>
            <Link href="#">
                <a>Accessoirs</a>
            </Link>
            <Link href="#">
                <a>Tissus</a>
            </Link>
            <Link href="#">
                <a>Créations</a>
            </Link>
            <Link href="#">
                <a>Astuces</a>
            </Link>
        </div>
    )
}

export default Navigation
