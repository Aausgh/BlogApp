"use client"

import styles from './comments.module.css'
import Link from 'next/link'
import SingleComment from '../singleComment/SingleComment'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json()

    if (!res.ok) {
        const error = new Error(data.message)
        throw error
    }

    return data;
}

const Comments = ({ postSlug }) => {
    const { status } = useSession()

    const { data, mutate, isLoading } = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher)

    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>

            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        placeholder='Write a comment'
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>Save</button>

                </div>
            ) : (
                <Link href='/'>Login to write comments</Link>
            )}

            <div className={styles.comments}>
                {isLoading ? "Loading..." : data?.map((item) => (
                    < SingleComment key={item._id} item={item} />
                ))

                }
            </div>
        </div >
    )
}

export default Comments