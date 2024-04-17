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
    TableContainer,
} from '@chakra-ui/react';
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';
import { getAuthSession } from '@/utils/auth';

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

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { posts } = await getData();
                const userPosts = posts.filter(post => post.userEmail === data?.user?.email);
                setPosts(userPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
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

            <TableContainer className={styles.table}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Category</Th>
                            <Th>Views</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {posts.map((p) => (
                            <Tr key={p.id}>
                                <Td className={styles.tdTitle}>
                                    <Image
                                        src={p.img}
                                        alt="post image"
                                        width={100}
                                        height={200}
                                        className={styles.tdImg}
                                        priority
                                    />
                                    {p.title}
                                </Td>

                                <Td className={styles.tdCat}>{p.catSlug}</Td>

                                <Td>{p.views}</Td>

                                <Td>
                                    <button className={styles.btnEdit}>
                                        <FaEdit />
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
            </TableContainer>
        </div>
    )
}

export default Dashboard;
