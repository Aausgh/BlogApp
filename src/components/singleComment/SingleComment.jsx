import styles from './singleComment.module.css'
import Image from 'next/image'

const SingleComment = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image
                    src=''
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