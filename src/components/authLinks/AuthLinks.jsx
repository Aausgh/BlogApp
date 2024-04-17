"use client"

import { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

import { IoMenu, IoClose } from "react-icons/io5";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
} from '@chakra-ui/react'

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const { data, status } = useSession()

    return (
        <>

            {status === 'unauthenticated' ? (
                <Link href={'/login'} className={`${styles.link} ${styles.button} ${styles.addButton}`}>Login</Link>
            ) : (
                <>
                    {/* <Link href='/add-blog' className={`${styles.link} ${styles.button} ${styles.addButton}`}>
                        Add
                    </Link>

                    <span className={`${styles.link} ${styles.button} ${styles.sButton}`} onClick={signOut}>
                        Logout
                    </span> */}

                    <Menu isLazy>
                        <MenuButton >
                            {data?.user?.image && (
                                <div className={styles.userImageContainer}>
                                    <Image
                                        src={data?.user?.image}
                                        alt='avatar'
                                        fill
                                        className={styles.avatar}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}
                        </MenuButton>
                        <MenuList width="10px" color={"black"}>
                            <MenuGroup as="h1" title={data?.user?.name} className={styles.userName}>

                                <MenuItem
                                    as={Link}
                                    href='/dashboard'
                                    color="black"
                                    className={styles.addBlog}
                                >

                                    Dashboard
                                </MenuItem>
                                <MenuItem
                                    onClick={signOut}
                                    color="red"
                                >
                                    Logout
                                </MenuItem>
                            </MenuGroup>

                        </MenuList>
                    </Menu>
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