import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '../utils/store';
import {withRouter} from "react-router-dom";
import Work from './work';

const useStyles = makeStyles({
    root: {
        maxWidth: '1200px',
        minWidth: '750px',
        margin: '0 auto',
        padding: '0 0.5rem',
        height: 'calc(100vh - 7rem)',
        overflowY: 'auto',
        '& p': {
            fontFamily: 'TimesNewRoman, serif',
            fontSize: '1rem'
        }       
    },
    gallary: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

const Period = (props)=> {
    const {painter: [painter, setPainter]} = useContext(StoreContext);
    const classes = useStyles();

    const id = parseInt(props.match.params.period);
    console.log(id);
    const period = painter.periods.find(p => p.id === id);
    
    if(!period) return <div>Not found</div>;

    return (
        <div className={classes.root}>
            <h1>{period.title}</h1>
            <div>
                {period.notes.map(note => <p key={note.id}>{note.text}</p>)}
            </div>
            <div className={classes.gallary}>
                {period.works.map( work => <Work key={work.id} period={period.id} work={work}/>)}
            </div>
        </div>
    );
}

export default withRouter(Period);