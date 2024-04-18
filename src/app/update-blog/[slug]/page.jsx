"use client"

import { useEffect, useState } from 'react';
import styles from './updateblog.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import Loader from '@/components/loader/Loader';



const storage = getStorage(app);

const UpdateBlog = () => {
    const { slug } = useParams();


    const [value, setValue] = useState('')
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")
    const [catSlug, setCatSlug] = useState("");
    const [img, setImg] = useState("");
    const [isloading, setIsLoading] = useState(false)

    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        try {
            const res = await fetch("/api/categories");
            if (!res.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await res.json();
            setCategory(data);
        } catch (error) {
            console.error(error);
        }
    }

    const getPost = async () => {

        try {
            const res = await fetch(`/api/posts/${slug}/`);
            if (!res.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await res.json();
            setTitle(data.title);
            setCatSlug(data.catSlug);
            setValue(data.desc);
            setImg(data.img)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await getCategory();
                await getPost();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setIsLoading(false);
        };

        fetchData();
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



    if (status === "unauthenticated") {
        router.push('/login')
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSlug = slugify(title);
        const res = await fetch(`/api/posts/${slug}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                desc: value,
                img: media || img,
                slug: newSlug,
                catSlug: catSlug || "mobiles"
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        } else {
            console.error("Failed to update the post");
        }
    }

    return (

        <>

            {isloading ? (
                <div className={styles.loading}>
                    <Loader />
                </div>
            ) : (

                <form className={styles.container} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Title'
                        className={styles.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <select className={styles.select} value={catSlug} onChange={(e) => setCatSlug(e.target.value)}>
                        {category.map((c) =>
                            <option key={c.id} value={c.slug}>{c.slug}</option>
                        )}
                    </select>



                    <div className={styles.editor}>

                        <div className={styles.imgContainer}>

                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />


                            {media ?
                                <Image
                                    src={media}
                                    alt=''
                                    width={200}
                                    height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                : <Image
                                    src={img}
                                    alt=''
                                    width={200}
                                    height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            }
                        </div>


                        <ReactQuill
                            theme="bubble"
                            value={value}
                            onChange={setValue}
                            placeholder='Write description'
                            className={styles.textArea}
                        />
                    </div>

                    <button className={styles.publish} type='submit'>
                        Publish
                    </button>
                </form>
            )}
        </>

    )
}

export default UpdateBlog