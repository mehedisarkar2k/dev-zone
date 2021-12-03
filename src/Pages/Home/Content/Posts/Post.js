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
            {posts.map((post) => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Post;
