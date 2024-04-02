import styles from './singleComment.module.css'
import Image from 'next/image'

const SingleComment = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image
                    src='https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    width={50}
                    height={50}
                    className={styles.image}
                />

                <div className={styles.userInfo}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>02.04.2024</span>
                </div>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat vitae fuga nihil corporis libero perferendis veritatis eaque aperiam magnam?
            </p>
        </div>
    )
}

export default SingleComment