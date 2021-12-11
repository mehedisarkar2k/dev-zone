import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import MainCard from '../../../Utilities/MainCard';

const SinglePost = ({ post, index }) => {
    const { title, content, author, authorPhoto, publishTime, reactions, banner, tags, comments } =
        post;

    const children = (
        <>
            <div className="flex items-center">
                <div>
                    <img src={authorPhoto} className="w-12 h-12" alt="" />
                </div>
                <div>
                    <p className="text-sm font-bold"> {author}</p>
                </div>
            </div>
            <div className="p-5">
                <NavLink className="text-3xl block" to={`blog/${title}`}>
                    {title}
                </NavLink>
                {tags.map((tag, TagIndex) => (
                    <button
                        type="button"
                        // eslint-disable-next-line react/no-array-index-key
                        key={TagIndex}
                        className="mr-5 my-2 rounded-md text-sm hover:bg-gray   p-2"
                    >
                        # {tag}
                    </button>
                ))}
                <p>{content}</p>

                <p>time : {publishTime}</p>
                <div className="flex w-full md:w-1/2 justify-between text-dark-light">
                    <div>
                        <div className="flex items-center">
                            <FiHeart /> <span className="ml-2">{reactions} Reactions</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <FaRegCommentAlt />{' '}
                            <span className="ml-2">{comments.length} Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return (
        <>
            {index === 0 ? (
                <MainCard img={banner}>{children}</MainCard>
            ) : (
                <MainCard>{children}</MainCard>
            )}
        </>
    );
};

export default SinglePost;
