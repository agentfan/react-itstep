import React from 'react';
import ClubInfo from './info';
import Achievement from './achievement';
import Player from './player';

const Cw2 = ({clubData})=> {
    const {info, achievements, players} = clubData;

    return(
        <>
            <ClubInfo info={info}/>
            <h3>Achievements</h3>
            {achievements.map(a => <Achievement key={a} text={a}/>)}
            <h3>Players</h3>
            <table>
                <tbody>
                {players.map(p => <Player key={p.name} info={p}/>)}
                </tbody>
            </table>
        </>
    );
}

export default Cw2;