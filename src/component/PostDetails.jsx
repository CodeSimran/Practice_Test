import React from "react";
import { useSelector } from "react-redux";

const PostDetails = () => {
    const post = useSelector((state) => state.posts.post);
    if(!post){
        return <h2>Select a post...</h2>
    }
    return (
        <div>
            <h1>Post Detail</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );

};
export default PostDetails;
