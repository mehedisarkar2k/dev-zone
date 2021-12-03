import React from 'react';
// Icons
import { BsFillTagsFill, BsHeartFill, BsMicFill } from 'react-icons/bs';
import { FaConnectdevelop } from 'react-icons/fa';
import {
    FcBriefcase,
    FcContacts,
    FcHome,
    FcIdea,
    FcList,
    FcShop,
    // eslint-disable-next-line prettier/prettier
    FcVideoFile
} from 'react-icons/fc';

const LeftNav = () => (
    <div className="bg-secondary-dark">
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

        <div className="flex flex-row bg-gray-100">
            <div className="flex flex-col w-full bg-white  overflow-hidden">
                <ul className="flex flex-col py-4">
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcHome />
                            </span>
                            <span className="text-lg font-medium">Home</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcBriefcase />
                            </span>
                            <span className="text-lg font-medium">Reading List</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcList />
                            </span>
                            <span className="text-lg font-medium">Listing</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <BsMicFill />
                            </span>
                            <span className="text-lg font-medium">Podcasts</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcVideoFile />
                            </span>
                            <span className="text-lg font-medium">Videos</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <BsFillTagsFill />
                            </span>
                            <span className="text-lg font-medium">Tags</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcIdea />
                            </span>
                            <span className="text-lg font-medium">FAQ</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcShop />
                            </span>
                            <span className="text-lg font-medium">DEV Shop</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <BsHeartFill />
                            </span>
                            <span className="text-lg font-medium">Sponsors</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FaConnectdevelop />
                            </span>
                            <span className="text-lg font-medium"> About</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray">
                        <a
                            href="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcContacts />
                            </span>
                            <span className="text-lg font-medium">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default LeftNav;
