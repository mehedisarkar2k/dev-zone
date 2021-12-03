import React from 'react';
import Content from './Content/Content';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';

const Home = () => (
    <div>
        <div className="">
            <div className="md:grid grid-cols-12">
                <div className="md:col-span-2">
                    <LeftNav />
                </div>
                <div className="md:col-span-6">
                    <Content />
                </div>
                <div className="md:col-span-4">
                    <RightNav />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
