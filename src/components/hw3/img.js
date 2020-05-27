import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '1rem 0',
        position: 'relative',
        overflow: 'hidden',
        lineHeight: '0',
        '& img': {
            height: 'auto',
            width: '100%',
        },
        '& div': {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            fontStyle: 'italic',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: '1.5rem',
            fontSize: '1.2rem'
        }
    }
});

const Img = ({src, about})=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={src} alt={about}/>
            <div>{about}</div>
        </div>
    );
}

export default Img;