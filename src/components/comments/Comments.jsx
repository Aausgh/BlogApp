import styles from './comments.module.css'
import Link from 'next/link'
import SingleComment from '../singleComment/SingleComment'

const Comments = () => {
    const status = 'authenticated'
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>

            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea placeholder='Write a comment' className={styles.input} />
                    <button className={styles.button}>Save</button>

                </div>
            ) : (
                <Link href='/'>Login to write comments</Link>
            )}

            <div className={styles.comments}>
                <SingleComment />
                <SingleComment />
                <SingleComment />
            </div>
        </div >
    )
}

export default Comments