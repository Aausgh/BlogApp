import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link'


const getData = async () => {
    const res = await fetch(
        `${process.env.NEXTAUTH_URL}/api/posts`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const Featured = async () => {

    const data = await getData();

    const featuredPosts = data?.posts?.filter(post => post.isFeatured === true);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Explore the World of Gadgets with <b>GadgetGlobe</b> - Where Innovation Shines Bright!</h1>

            {featuredPosts && (
                <div className={styles.post}>
                    <div className={styles.imgContainer}>
                        <Image
                            src={featuredPosts[0]?.img}
                            alt='featured image'
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className={styles.postTitle}>{featuredPosts[0]?.title}</h1>

                        <div
                            className={styles.postDesc}
                            dangerouslySetInnerHTML={{ __html: featuredPosts[0]?.desc.substring(0, 150) + "...." }}
                        />

                        <Link href={`/posts/${featuredPosts[0]?.slug}`} className={styles.link}>Read More</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Featured
