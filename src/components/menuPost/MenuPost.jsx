import styles from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({ withImage, post }) => {
    return (
        <Link href={'/'} className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                    <Image
                        src={post.img}
                        alt=''
                        fill
                        className={styles.image}
                    />
                </div>
            )}

            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[post.catSlug]}`}>
                    {post.catSlug}
                </span>

                <h3 className={styles.postTitle}>
                    {post.title}
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