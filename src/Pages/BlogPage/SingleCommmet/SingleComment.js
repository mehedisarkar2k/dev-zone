import React from 'react';
import { BsDot } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import MainCard from '../../Utilities/MainCard';

const SingleComment = ({ comment }) => {
    const { content, author, reaction, authorPhoto, date } = comment;
    return (
        <MainCard>
            <div className="flex items-center w-full">
                <div>
                    <img className="w-12 h-12 rounded-full" src={authorPhoto} alt="" />
                </div>
                <div className="mx-3">
                    <p className="text-sm">{author}</p>
                </div>
                <div className="text-dark-light">
                    <BsDot />
                </div>
                <div>
                    <p className="text-sm text-dark-light">{date}</p>
                </div>
            </div>
            <p>{content}</p>
            <div className="flex items-center text-sm text-dark-light">
                <FiHeart /> <span className="ml-2">{reaction} Reactions</span>
            </div>
        </MainCard>
    );
};

export default SingleComment;
