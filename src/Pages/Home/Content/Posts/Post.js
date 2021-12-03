import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('./post.json')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <div>
            {posts.map((post, index) => (
                <SinglePost key={post.id} index={index} post={post} />
            ))}
        </div>
    );
};

export default Post;
