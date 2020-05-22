import React from 'react';
import ClubInfo from './info';
import Achievement from './achievement';
import Player from './player';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Cw2 = ({ clubData }) => {
    const { info, achievements, players } = clubData;

    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Info</Link>
                </li>
                <li>
                    <Link to="/achivements">Achievements</Link>
                </li>
                <li>
                    <Link to="/players">Players</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/achivements">
                    <h3>Achievements</h3>
                    {achievements.map(a => <Achievement key={a} text={a} />)}
                </Route>
                <Route path="/players">
                    <h3>Players</h3>
                    <table>
                        <tbody>
                            {players.map(p => <Player key={p.name} info={p} />)}
                        </tbody>
                    </table>
                </Route>
                <Route path="/">
                    <ClubInfo info={info} />
                </Route>
            </Switch>
        </Router>
    );
}

export default Cw2;