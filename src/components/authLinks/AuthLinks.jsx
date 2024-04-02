"use client"

import { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import { IoMenu, IoClose } from "react-icons/io5";

const AuthLinks = () => {


    const [open, setOpen] = useState(false)

    const { status } = useSession()

    return (
        <>

            {status === 'unauthenticated' ? (
                <Link href={'/login'} className={`${styles.link} ${styles.button} ${styles.addButton}`}>Login</Link>
            ) : (
                <>
                    <Link href='/add-blog' className={`${styles.link} ${styles.button} ${styles.addButton}`}>
                        Add
                    </Link>

                    <span className={`${styles.link} ${styles.button} ${styles.sButton}`} onClick={signOut}>
                        Logout
                    </span>
                </>
            )}

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                {open
                    ? (<IoClose size={30} />)
                    : (<IoMenu size={30} />)
                }
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
                            <Link
                                href='/add-blog'
                                className={` ${styles.button} ${styles.addButton}`}
                            >
                                Add
                            </Link>

                            <span onClick={signOut} className={` ${styles.button} ${styles.sButton}`}>
                                Logout
                            </span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks