import React from 'react';
import ClubInfo from './info';
import Achievement from './achievement';
import Player from './player';

const Cw2 = ({clubData})=> {
    const {info, achievements, players} = clubData;

    return(
        <div>
            <ClubInfo info={info}/>
            <h3>Achievements</h3>
            {achievements.map(a => <Achievement key={a} text={a}/>)}
            <h3>Players</h3>
            {players.map(p => <Player key={p.name} name={p.name} img={p.img}/>)}
        </div>
    );
}

export default Cw2;