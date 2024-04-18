"use client"

import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';
import Loader from '@/components/loader/Loader';

const getData = async () => {
    const res = await fetch(
        `/api/posts`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const Dashboard = () => {
    const { data } = useSession();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            try {
                const { posts } = await getData();
                const userPosts = posts.filter(post => post.userEmail === data?.user?.email);
                setPosts(userPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
            setIsLoading(false);
        };

        fetchPosts();
    }, [data]);


    const deletePost = async (slug) => {
        try {
            const response = await fetch(`/api/posts/${slug}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete a post');
            }

            setPosts((currentPosts) => currentPosts.filter(post => post.slug !== slug));
        } catch (error) {
            console.error("Failed to delete the post:", error);
        }
    };


    return (

        <div className={styles.container}>

            <div className={styles.subContainer}>
                <h1 className={styles.title}>Dashboard</h1>

                <Link href="/add-blog">
                    <button className={styles.btnAdd}>
                        <FaPlus />
                        Add Blog
                    </button>
                </Link>
            </div>

            {isLoading ? (
                <div className={styles.loading}>
                    <Loader />
                </div>
            ) : (
                <Table>
                    <Thead>
                        <Tr >
                            <Th textAlign={"center"} fontSize={"20px"} >Title</Th>
                            <Th fontSize={"20px"} >Category</Th>
                            <Th fontSize={"20px"} >Views</Th>
                            <Th fontSize={"20px"} >Actions</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {posts.map((p) => (
                            <Tr key={p.id} className={styles.tbodyTr}>
                                <Td className={styles.tdTitle}>
                                    <Image
                                        src={p.img}
                                        alt="post image"
                                        width={120}
                                        height={250}
                                        className={styles.tdImg}
                                        priority
                                    />
                                    <Link href={`/posts/${p.slug}`} className={styles.tdLink}>
                                        {p.title}
                                    </Link>
                                </Td>

                                <Td className={styles.tdCat}>{p.catSlug}</Td>

                                <Td className={styles.tdViews}>{p.views}</Td>

                                <Td className={styles.tdActions}>
                                    <button className={styles.btnEdit}>
                                        <Link href={`/update-blog/${p.slug}`}>
                                            <FaEdit />
                                        </Link>
                                    </button>

                                    <button
                                        className={styles.btnDelete}
                                        onClick={() => deletePost(p.slug)}
                                    >
                                        <MdDelete />
                                    </button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}
        </div>


    )
}

export default Dashboard;
