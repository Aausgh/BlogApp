import CardList from "@/components/cardList/CardList";
import styles from "./categoryPage.module.css";
import Menu from "@/components/menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";

const CategoryPage = ({ searchParams }) => {

    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams

    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} ${styles[cat]}`}> {cat} Blogs</h1>

            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
            <CategoryList />
        </div>
    )
}

export default CategoryPage