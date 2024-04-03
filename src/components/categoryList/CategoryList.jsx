import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
    {
        name: 'React JS',
        image: '/react.svg',
        link: 'reactjs'
    },
    {
        name: 'Next JS',
        image: '/nextjs.svg',
        link: 'nextjs'
    },
    {
        name: 'Node JS',
        image: '/nodejs.svg',
        link: 'nodejs'
    },
    {
        name: 'Javascript',
        image: '/javascript.svg',
        link: 'javascript'
    },
    {
        name: 'Node JS',
        image: '/nodejs.svg',
        link: 'nodejs'
    },
    {
        name: 'Javascript',
        image: '/javascript.svg',
        link: 'javascript'
    },
]

const getCat = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

const CategoryList = async () => {

    const data = await getCat()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>

            <div className={styles.categories}>
                {data?.map((cat) => (
                    <Link
                        href={`/category-page?cat=${cat.slug}`}
                        className={`${styles.category} ${styles[cat.slug]}`}
                        key={cat.id}
                    >
                        {cat.img && (
                            <Image
                                src={cat.img}
                                alt=""
                                width={32}
                                height={32}
                                className={styles.image}
                            />
                        )}
                        {cat.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList