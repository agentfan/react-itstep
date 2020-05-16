import React from 'react';

const Player = ({info})=> {
    console.log(info);
    return(
        <tr>
            <td><img src={info.img} alt="IMG"/></td>
            <td>{info.name}</td>
        </tr>
    );
}

export default Player;