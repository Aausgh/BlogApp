import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

    const status = 'unauthenticated'

    return (
        <div>

            {status === 'unauthenticated' ? (
                <Link href={'/login'}>Login</Link>
            ) : (
                <>
                    <Link href='/add-blog'>Add Blog</Link>
                    <span className="cursor-pointer">Logout</span>
                </>
            )}
        </div>
    )
}

export default AuthLinks