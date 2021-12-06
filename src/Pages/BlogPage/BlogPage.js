import React from 'react';
import LeftNavBlog from './LeftNavBlog/LeftNavBlog';
import MainBlogContainer from './MainBlogContainer/MainBlogContainer';

const BlogPage = () => (
    <div className="container mx-auto">
        <div>
            <div className="md:grid grid-cols-12 md:gap-2">
                <div className="md:col-span-1">
                    <LeftNavBlog />
                </div>
                <div className="md:col-span-8">
                    <MainBlogContainer />
                </div>
                <div className="md:col-span-3" />
            </div>
        </div>
    </div>
);

export default BlogPage;
