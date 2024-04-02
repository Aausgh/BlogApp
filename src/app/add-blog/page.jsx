"use client"

import { useState } from 'react';
import styles from './addBlog.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'

const AddBlog = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className={styles.container}>

            <input type="text" placeholder='Title' className={styles.input} />

            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src='./plus.svg' alt='' width={20} height={20} />
                </button>

                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src='./image.svg' alt='' width={20} height={20} />
                        </button>

                        <button className={styles.addButton}>
                            <Image src='./external.svg' alt='' width={20} height={20} />
                        </button>

                        <button className={styles.addButton}>
                            <Image src='./video.svg' alt='' width={20} height={20} />
                        </button>
                    </div>
                )}

                <ReactQuill
                    theme="bubble"
                    value={value}
                    onChange={setValue} placeholder='Write description'
                    className={styles.textArea}
                />
            </div>

            <button className={styles.publish}>Publish</button>
        </div>
    )
}

export default AddBlog