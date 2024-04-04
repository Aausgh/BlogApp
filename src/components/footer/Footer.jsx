import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const getCat = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

const Footer = async () => {

    const data = await getCat()

    return (
        <div className={styles.container}>
            <div className={styles.info}>

                <div className={styles.logo}>
                    <Image src="/logo.png" alt="" width={50} height={50} />
                    <h1 className={styles.logoText}>GadgetGlobe</h1>
                </div>

                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                    porro sequi, totam minima consequuntur, aspernatur deleniti vero
                    repellendus dorales.
                </p>

                <div className={styles.icons}>
                    <Image src="/facebook.svg" alt="" width={18} height={18} />
                    <Image src="/instagram.svg" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.svg" alt="" width={18} height={18} />
                </div>
            </div>

            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    {data.slice(0, 4).map((cat) => (
                        <Link
                            href={`/category-page?cat=${cat.slug}`}
                            key={cat.id}
                        >
                            {cat.title}
                        </Link>
                    ))}

                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;