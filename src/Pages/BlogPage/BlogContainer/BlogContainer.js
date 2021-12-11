/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import MainCard from '../../Utilities/MainCard';

const BlogContainer = ({ blog }) => {
    const {
        blogImage,
        authorName,
        postDate,
        authorTeamName,
        postTags,
        secondTitle,
        postContent,
        reminder,
    } = blog;
    const { title } = useParams();
    const children = (
        <div>
            <div className="container">
                <div className="flex flex-row items-center space-x-1">
                    <FaUserCircle />
                    <div>
                        <span className="font-bold">{authorName}</span>
                        <span className="text-dark-light"> for </span>
                        <p className="inline">{authorTeamName}</p>
                    </div>
                </div>
                <p className="text-xs text-dark-light ml-5">{postDate}</p>
                <div className="mt-8">
                    <h2 className="font-black text-shadow mb-4">{title}</h2>
                    {postTags.map((tag, blogIndex) => (
                        <span
                            key={blogIndex}
                            className="mr-2 p-2 hover:rounded hover:bg-gray hover:border"
                        >
                            #{tag}
                        </span>
                    ))}
                    <h5 className="mt-6 font-black text-lg">{secondTitle}</h5>
                </div>
                <div className=" bg-gray w-40 h-1 mx-auto my-5" />
                <div>
                    <p className="md:text-xl">{postContent.split('!')[0]}</p>
                    <div className="border-l-4 mt-4 border-dark-light">
                        <p className="md:text-xl ml-3">
                            <mark>{reminder}</mark>
                        </p>
                    </div>
                    <p className="md:text-xl mt-4">{postContent.split('!')[1]}</p>
                </div>
                <div className=" bg-gray w-40 h-1 mx-auto my-5" />
                <em className="md:text-xl">
                    Click
                    <a href="/" className="underline mx-1 text-dark-light">
                        here
                    </a>
                    to read the hackathon rules and get started. ✨
                </em>
            </div>
        </div>
    );
    return <MainCard img={blogImage}>{children}</MainCard>;
};

export default BlogContainer;
