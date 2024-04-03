import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Explore the World of Gadgets with <b>GadgetGlobe</b> - Where Innovation Shines Bright!</h1>

            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src={''} alt='' fill className={styles.image} />
                </div>

                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur, adipisicing elit.</h1>

                    <p className={styles.postDesc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt reiciendis minus non accusantium a expedita eaque, ex accusamus perspiciatis repudiandae veritatis quo ducimus iure amet ipsam fugiat et sequi cupiditate!
                    </p>

                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured