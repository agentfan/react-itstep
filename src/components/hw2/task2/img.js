import React from 'react';

const Img = ({className, path})=> {
    return (
        <div className={className}>
            <img src={path}/>
        </div>
    );
}

export default Img;