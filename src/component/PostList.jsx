import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const loading = useSelector((state) => state.posts.loading);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }
    ,[dispatch]);

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return (
        <div>
            <h1>Posts from JsonPlaceholder</h1>
            <h2>Post List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} onClick={() => dispatch(selectPost(post))}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
        );
        };
export default PostList;