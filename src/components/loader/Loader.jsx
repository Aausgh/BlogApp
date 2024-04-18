import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.shadow} />
            <div className={styles.shadow} />
            <div className={styles.shadow} />
        </div>

    )
}

export default Loader