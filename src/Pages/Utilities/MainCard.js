import React from 'react';

const MainCard = ({ img, additionalStyle, children }) => (
    <div
        className={`${additionalStyle} bg-white  border  my-5 border-gray rounded-xl overflow-hidden`}
    >
        {img && <img src={img} alt="" />}
        <div className="p-5">{children}</div>
    </div>
);

export default MainCard;
