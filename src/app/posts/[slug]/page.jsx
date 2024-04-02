import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>

                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src='https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' fill className={styles.avatar} />
                        </div>

                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.04.2024</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src='https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' fill className={styles.image} />
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint excepturi impedit quia sunt delectus sequi at, tempore ab deserunt nobis quisquam, aperiam numquam, tempora nihil et cum vitae autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non reprehenderit doloremque atque dolorum nemo aspernatur. Cum, alias consectetur. Qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint excepturi impedit quia sunt delectus sequi at, tempore ab deserunt nobis quisquam, aperiam numquam, tempora nihil et cum vitae autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse consectetur quibusdam ab! Ratione ducimus excepturi inventore quo beatae cum ea illum laudantium fugit mollitia laboriosam obcaecati, sed iste enim.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint excepturi impedit quia sunt delectus sequi at, tempore ab deserunt nobis quisquam, aperiam numquam, tempora nihil et cum vitae autem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, atque.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>

                <Menu />
            </div>
        </div>
    )
}

export default SinglePage