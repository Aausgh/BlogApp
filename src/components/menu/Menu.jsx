"use client"

import React, { useEffect, useState } from 'react';
import styles from './menu.module.css';
import MenuPost from '../menuPost/MenuPost';

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

const Menu = () => {
    const [popularPosts, setPopularPosts] = useState([]);
    const [editorPicks, setEditorPicks] = useState([]);

    useEffect(() => {
        const fetchPopularPosts = async () => {
            try {
                const { posts } = await getData();
                const sortedPosts = posts.sort((a, b) => b.views - a.views);
                const topPosts = sortedPosts.slice(0, 3);
                setPopularPosts(topPosts);

                const editorPicks = posts.filter(post => post.editorsPick);
                setEditorPicks(editorPicks);
            } catch (error) {
                console.error("Failed to fetch popular posts:", error);
            }
        };

        fetchPopularPosts();
    }, []);



    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>

            <div className={styles.items}>
                {popularPosts.map((post) => (
                    <MenuPost key={post.id} post={post} />
                ))}
            </div>

            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>

            <div className={styles.items}>
                {editorPicks.map((post) => (
                    <MenuPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
