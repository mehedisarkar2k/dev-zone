import React from 'react';

// Main Card
// If image is needed in the card then you can pass img Url in img props
// If additional style is needed then you can pass classes in a string
const MainCard = ({ img, additionalStyle, children }) => (
    <div
        className={`${additionalStyle} bg-white  border  my-5 border-gray rounded-xl overflow-hidden`}
    >
        {img && <img src={img} alt="" />}
        <div className="p-5">{children}</div>
    </div>
);

export default MainCard;
