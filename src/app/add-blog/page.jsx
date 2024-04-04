"use client"

import { useEffect, useState } from 'react';
import styles from './addBlog.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';



const storage = getStorage(app);


const getCat = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

const AddBlog = () => {


    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")
    const [catSlug, setCatSlug] = useState("");

    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/categories");
            if (!res.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await res.json();
            setCategory(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategory();
    }, []);

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                    });
                }
            );

        }
        file && upload();
    }, [file])

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    if (status === "unauthenticated") {
        router.push('/')
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "mobiles"
            }),
        });
        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        }
    }

    return (
        <div className={styles.container}>

            <input
                type="text"
                placeholder='Title'
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />

            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                {category.map((c) =>
                    <option key={c.id} value={c.slug}>{c.slug}</option>
                )}
            </select>

            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src='./plus.svg' alt='' width={20} height={20} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </button>

                {open && (
                    <div className={styles.add}>
                        <input
                            type="file"
                            id='image'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: 'none' }}
                        />

                        <button className={styles.addButton}>
                            <label htmlFor='image'>
                                <Image src='./image.svg' alt='' width={20} height={20} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </label>
                        </button>


                        <button className={styles.addButton}>
                            <Image src='./external.svg' alt='' width={20} height={20} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </button>

                        <button className={styles.addButton}>
                            <Image src='./video.svg' alt='' width={20} height={20} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </button>
                    </div>
                )}

                <ReactQuill
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder='Write description'
                    className={styles.textArea}
                />
            </div>

            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default AddBlog