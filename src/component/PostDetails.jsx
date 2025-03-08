import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const [post, setpost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setpost(response.data.filter((post) => post.id == id));
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchPosts();
    }, [id]); // Add id to the dependency array

    if (!post.length) {
        return <h2>Select a post...</h2>;
    }

    return (
        <div>
            <h1>Post Detail</h1>
            {post.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostDetails;