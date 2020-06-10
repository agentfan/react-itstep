import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '../utils/store';

const useStyles = makeStyles({
    root: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem',
        height: 'calc(100vh - 7rem)',
        overflowY: 'auto',
        '& p': {
            fontFamily: 'TimesNewRoman, serif',
            fontSize: '1rem'
        }        
    },
    '&::after': {
        content: '',
        clear: 'both'
    },
    imgWrapper: {
        width: 'calc(100%)',
        maxWidth: '600px',
        float: 'left',
        padding: '1rem',
        '& img': {
            width: '100%',
            height: 'auto'
        }
    }
});

const Home = ()=> {
    const {painter: [painter, setPainter]} = useContext(StoreContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.imgWrapper}>
                <img src={painter.img} alt={painter.name}/>
            </div>
            <div>
                {painter.notes.map( note => <p key={note.id}>{note.text}</p>)}
            </div>
        </div>
    );
}

export default Home;