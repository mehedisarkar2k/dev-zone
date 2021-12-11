import React from 'react';
import { BsSuitHeart, BsBookmark } from 'react-icons/bs';
import { GiUnicorn } from 'react-icons/gi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const LeftNavBlog = () => (
    // console.log('LeftNavBlog');
    <div className="my-16">
        <div className="flex flex-row bg-gray-100">
            <div className="flex flex-col w-full overflow-hidden">
                <ul className="flex flex-col py-4 space-y-6">
                    <li>
                        <span className="text-2xl">
                            <BsSuitHeart />
                        </span>
                        <span className="text-lg font-medium">40</span>
                    </li>
                    <li>
                        <span className="text-2xl">
                            <GiUnicorn />
                        </span>
                        <span className="text-lg font-medium">15</span>
                    </li>
                    <li>
                        <span className="text-2xl">
                            <BsBookmark />
                        </span>
                        <span className="text-lg font-medium">15</span>
                    </li>
                    <li>
                        <span className="text-2xl">
                            <HiOutlineDotsHorizontal />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
export default LeftNavBlog;
