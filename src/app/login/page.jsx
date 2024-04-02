import styles from './login.module.css'
import Image from 'next/image'

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>
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