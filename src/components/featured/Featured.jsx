import styles from './feature.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Unlock the power of code with <b>Blogify</b>: Share, Learn, Inspire!</h1>

            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src={'https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='' fill className={styles.image} />
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