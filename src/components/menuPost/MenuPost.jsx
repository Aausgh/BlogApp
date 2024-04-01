import styles from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({ withImage }) => {
    return (
        <Link href={'/'} className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                    <Image src='nextjs.svg' alt='' fill className={styles.image} />
                </div>
            )}

            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.react}`}>
                    React JS
                </span>

                <h3 className={styles.postTitle}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h3>

                <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}> - 4.1.2024</span>
                </div>
            </div>
        </Link>
    )
}

export default MenuPost