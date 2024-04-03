"use client"

import { signIn, useSession } from 'next-auth/react'
import styles from './login.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Login = () => {

    const { status } = useSession()


    const router = useRouter()

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    if (status === "authenticated") {
        router.push('/')

    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={() => signIn('google')}>
                    <Image src='./google.svg' alt='' width={30} height={30} />
                    Sign in with Google
                </div>
                <div className={styles.socialButton}>
                    <Image src='./github.svg' alt='' width={30} height={30} />
                    Sign in with Github
                </div>
            </div>
        </div>
    )
}

export default Login