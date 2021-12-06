import React from 'react';
// Icons
import { BsFillTagsFill, BsHeartFill } from 'react-icons/bs';
import { FaConnectdevelop } from 'react-icons/fa';
import {
    FcBriefcase,
    FcContacts,
    FcHome,
    FcIdea,
    FcShop,
    // eslint-disable-next-line prettier/prettier
    FcVideoFile
} from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const LeftNav = () => (
    <div className="my-5">
        <div className="flex flex-row bg-gray-100">
            <div className="flex flex-col w-full   overflow-hidden">
                <ul className="flex flex-col py-4">
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcHome />
                            </span>
                            <span className="text-lg font-medium">Home</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="readinglist"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcBriefcase />
                            </span>
                            <span className="text-lg font-medium">Reading List</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="videos"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcVideoFile />
                            </span>
                            <span className="text-lg font-medium">Videos</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/tags"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <BsFillTagsFill />
                            </span>
                            <span className="text-lg font-medium">Tags</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/faq"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcIdea />
                            </span>
                            <span className="text-lg font-medium">FAQ</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/shop"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcShop />
                            </span>
                            <span className="text-lg font-medium">DEV Shop</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/sponsors"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <BsHeartFill />
                            </span>
                            <span className="text-lg font-medium">Sponsors</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/about"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FaConnectdevelop />
                            </span>
                            <span className="text-lg font-medium"> About</span>
                        </NavLink>
                    </li>
                    <li className="hover:bg-gray">
                        <NavLink
                            to="/contact"
                            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <FcContacts />
                            </span>
                            <span className="text-lg font-medium">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default LeftNav;
