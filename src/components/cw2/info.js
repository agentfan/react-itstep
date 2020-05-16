import React from 'react';

const ClubInfo = ({info})=> {
    return(
        <div>
            <img src={info.logo} alt="LOGO"/>
            <p>Club {info.name}</p>
            <p>from {info.city}</p>
        </div>
    );
}

export default ClubInfo;