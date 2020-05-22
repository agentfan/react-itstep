import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ClubInfo from './info';
import Achievement from './achievement';
import Player from './player';

const useStyles = makeStyles({
  root: {
      backgroundColor: 'lightgrey',
      "& .players-table": {
          backgroundColor: 'blue',
          padding: '1rem'
      }
  },
});

const Cw2 = ({ clubData }) => {
    const classes = useStyles();

    const { info, achievements, players } = clubData;

    return (
        <Router>
            <Grid container spacing={3} direction="row" className={classes.root}>
                <Grid item md={12}>
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
                </Grid>
            <Switch>
                <Route path="/achivements">
                    <Grid item>
                        <h3>Achievements</h3>
                        {achievements.map(a => <Achievement key={a} text={a} />)}
                    </Grid>
                </Route>
                <Route path="/players">
                <Grid item>
                    <h3>Players</h3>
                    <table className="players-table">
                        <tbody>
                            {players.map(p => <Player key={p.name} info={p} />)}
                        </tbody>
                    </table>
                </Grid>
                </Route>
                <Route path="/">
                    <Grid item>
                    <ClubInfo info={info} />
                    </Grid>
                </Route>
            </Switch>
            <Grid item>
                <form>
                    <TextField type="password" disabled={false} error label="text:" name="my_input"/>
                    <button>Submit</button>
                </form>
            </Grid>
            </Grid>
        </Router>
    );
}

export default Cw2;