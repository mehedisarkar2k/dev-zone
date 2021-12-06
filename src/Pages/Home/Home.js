import React from 'react';
import Content from './Content/Content';
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
                    <Content />
                </div>
                <div className="md:col-span-3">
                    <RightNav />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
