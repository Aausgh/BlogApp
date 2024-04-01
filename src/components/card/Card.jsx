import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={'https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt=''
                    fill
                    className={styles.image}
                />
            </div>

            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}>React JS</span>
                </div>

                <Link href={'/'}>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                </Link>

                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis quo amet magni unde exercitationem veritatis ullam similique quod sapiente sequi, nemo mollitia, pariatur quas facilis?
                </p>

                <Link href={'/'} className={styles.link}>Read More...</Link>
            </div>
        </div>
    )
}

export default Card