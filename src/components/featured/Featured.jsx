import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link'


const getData = async () => {
    const res = await fetch(
        `http://localhost:3000/api/posts`,
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

    return (

        <div className={styles.container}>
            <h1 className={styles.title}>Explore the World of Gadgets with <b>GadgetGlobe</b> - Where Innovation Shines Bright!</h1>

            {data?.posts?.[0]?.isFeatured === true && <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src={data?.posts[0]?.img}
                        alt='featured image'
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>{data?.posts[0]?.title}</h1>

                    <div
                        className={styles.postDesc}
                        dangerouslySetInnerHTML={{ __html: data?.posts[0]?.desc.substring(0, 110) + "...." }}
                    />

                    <Link href={`/posts/${data.posts[0].slug}`} className={styles.link}>Read More</Link>
                </div>
            </div>}
        </div>
    )
}

export default Featured