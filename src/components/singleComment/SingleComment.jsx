import styles from './singleComment.module.css'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns';

const SingleComment = ({ key, item }) => {
    const timePassed = formatDistanceToNow(new Date(item.createdAt), { addSuffix: true });

    return (
        <div className={styles.comment} key={key}>
            <div className={styles.user}>
                {item?.user?.image &&
                    <Image
                        src={item?.user?.image}
                        alt=''
                        width={50}
                        height={50}
                        className={styles.image}
                    />
                }

                <div>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>
                            {item?.user?.name}
                        </span>

                        <span className={styles.date}>
                            {timePassed}
                        </span>
                    </div>

                    <p className={styles.desc}>
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleComment