import React from 'react';

const Player = ({name, img})=> {
    return(
        <div>
            <img  src={img} alt="IMG"/>
            <p>{name}</p>
        </div>
    );
}

export default Player;