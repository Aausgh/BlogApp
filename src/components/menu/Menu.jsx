import styles from './menu.module.css'
import MenuPost from '../menuPost/MenuPost'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>

            <div className={styles.items}>
                <MenuPost withImage={false} />
                <MenuPost withImage={false} />
                <MenuPost withImage={false} />
            </div>

            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>

            <div className={styles.items}>
                <MenuPost withImage={true} />
                <MenuPost withImage={true} />
                <MenuPost withImage={true} />
            </div>
        </div>
    )
}

export default Menu