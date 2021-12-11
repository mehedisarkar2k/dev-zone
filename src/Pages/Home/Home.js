import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';

const Home = () => (
    <div className="container mx-auto">
        <div>
            <div className="md:grid grid-cols-12 md:gap-2">
                <div className="md:col-span-2">
                    <LeftNav />
                </div>
                <div className="md:col-span-7">
                    <div className="mt-4">
                        <NavLink className="py-3 px-6 hover:bg-white text-xl rounded-lg" to="/">
                            Relevant
                        </NavLink>
                        <NavLink
                            className="py-3 px-6 hover:bg-white text-xl rounded-lg"
                            to="/latest"
                        >
                            Latest
                        </NavLink>
                        <NavLink className="py-3 px-6 hover:bg-white text-xl rounded-lg" to="/top">
                            Top
                        </NavLink>
                    </div>
                    {/* <Content /> */}
                    <Outlet />
                </div>
                <div className="md:col-span-3">
                    <RightNav />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
