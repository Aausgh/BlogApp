"use client"

import { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {


    const [open, setOpen] = useState(false)

    const status = 'unauthenticated'

    return (
        <>

            {status === 'unauthenticated' ? (
                <Link href={'/login'} className={styles.link}>Login</Link>
            ) : (
                <>
                    <Link href='/add-blog' className={styles.link}>Add Blog</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>

            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/contact'}>Contact</Link>
                    <Link href={'/about'}>About</Link>
                    {status === 'unauthenticated' ? (
                        <Link href={'/login'}>Login</Link>
                    ) : (
                        <>
                            <Link href='/add-blog'>Add Blog</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks