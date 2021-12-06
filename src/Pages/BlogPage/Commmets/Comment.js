import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MainCard from '../../Utilities/MainCard';
import SingleComment from '../SingleCommmet/SingleComment';

const Comment = () => {
    const { title } = useParams();
    // const [filteredComment, setfilterComment] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('/post.json')
            .then((res) => res.json())
            .then((data) => {
                // console.log(id);

                const filteredPost = data.find((d) => d.title === title);
                console.log(filteredPost);
                setComments(filteredPost.comments);
            });
    }, [title]);

    return (
        <MainCard>
            <h3>Discussion ({comments.length})</h3>
            {comments.map((comment, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <SingleComment key={i} comment={comment} />
            ))}
        </MainCard>
    );
};

export default Comment;
