import React from 'react';

const SinglePost = ({ post }) => {
    const { title, content, author, authorPhoto, publishTime, reactions, banner, tags } = post;
    console.log(authorPhoto);
    return (
        <div className="rounded-lg bg-white overflow-hidden">
            <img src={banner} alt="" />
            <div className="p-5">
                <div className="flex items-center ">
                    <div>
                        <img src={authorPhoto} className="w-12 h-12" alt="" />
                    </div>
                    <div>
                        <p className="text-sm font-bold"> {author}</p>
                    </div>
                </div>
                <div className="p-5">
                    <h3>{title}</h3>
                    {tags.map((tag, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={index} className="mr-5 text-sm">
                            # {tag}
                        </span>
                    ))}
                    <p>{content}</p>

                    <p>time : {publishTime}</p>
                    <p>Reaction : {reactions}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
