import React from 'react';

const Img = ({className, path})=> {
    return (
        <div className={className}>
            <img src={path} alt="avatar"/>
        </div>
    );
}

export default Img;