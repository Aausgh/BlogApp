import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

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

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>

            <div className={styles.categories}>
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={`/blog?cat=${cat.link}`}
                        className={`${styles.category} ${styles.style}`}
                    >
                        <Image
                            src={cat.image}
                            alt=''
                            width={40}
                            height={40}
                            className={styles.image}
                        />
                        {cat.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList