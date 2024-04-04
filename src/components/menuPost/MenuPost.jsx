import styles from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.item}>

            <div className={styles.imageContainer}>
                <Image
                    src={post.img}
                    alt=''
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>


            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[post.catSlug]}`}>
                    {post.catSlug}
                </span>

                <h3 className={styles.postTitle}>
                    {post.title}
                </h3>

                {/* <div className={styles.detail}>
                    <span className={styles.username}>{post?.user?.userName}</span>
                    <span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
                </div> */}
            </div>
        </Link>
    )
}

export default MenuPost