import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './navbar.module.css'
import ThemeToogle from '../themeToggle/ThemeToogle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>

                <Image src={'/facebook.svg'} alt='facebook' width={24} height={24} />
                <Image src={'/instagram.svg'} alt='instagram' width={24} height={24} />
                <Image src={'/tiktok.png'} alt='tiktok' width={24} height={24} />
                <Image src={'/youtube.svg'} alt='youtube' width={24} height={24} />
            </div>
            <div className={styles.logo}>
                GadgetGlobe
            </div>
            <div className={styles.links}>
                <ThemeToogle />
                <Link href={'/'} className={styles.link}>Home</Link>
                <Link href={'/'} className={styles.link}>Contact</Link>
                <Link href={'/'} className={styles.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar