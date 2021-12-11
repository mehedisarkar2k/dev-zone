import React, { useEffect } from 'react';
import BlogContainer from '../BlogContainer/BlogContainer';

const MainBlogContainer = () => {
    const [blogs, setBlogs] = React.useState([]);
    useEffect(() => {
        fetch('/blogContent.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div className="my-10">
            {blogs.map((blog) => (
                <BlogContainer key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default MainBlogContainer;
