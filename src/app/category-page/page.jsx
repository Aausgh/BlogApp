import CardList from "@/components/cardList/CardList";
import styles from "./categoryPage.module.css";
import Menu from "@/components/menu/Menu";

const CategoryPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Blog</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default CategoryPage