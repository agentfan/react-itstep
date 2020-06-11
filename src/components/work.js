import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '../utils/store';
import { Link } from "react-router-dom";
import onLikeClicked from '../utils/onLikeClicked';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        maxWidth: '360px',
        cursor: 'pointer',
        '& a': {
            textDecoration: 'none'
        }
    },
    img: {
        padding: '0',
        borderRadius: '0.5rem',
        boxShadow: '0 0 0.5rem rgba(0,0,0,0.5)',
        lineHeight: '0',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    title: {
        padding: '0.5rem 0',
        fontSize: '0.85rem',
        fontStyle: 'italic',
        color: 'grey',
        textDecoration: 'none',
    },
    like: {
        position: 'absolute',
        bottom: '0.5rem',
        right: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '& div:first-child': {
            height: '1rem',
            width: '1.5rem',
            '& img': {
                height: '100%',
                width: 'auto'
            }
        }
    }
});

const Work = ({ period, work }) => {
    const {painter: [painter, setPainter]} = useContext(StoreContext);    
    const classes = useStyles();

    const handleLikeClicked = ()=> {
        onLikeClicked(period, work.id, painter, setPainter);
    }

    return (
        <div className={classes.root}>
            <Link to={`/${period}/${work.id}`}>
                <div className={classes.img}>
                    <img src={`./images/${work.img}`} alt={work.title} />
                </div>
                <div className={classes.title}>
                    {`"${work.title}" ${work.year}`}
                </div>
            </Link>
            <div className={classes.like} onClick={handleLikeClicked}>
                    <div><img src='./images/like.svg'/></div>
                    <div>{work.likes}</div>                 
            </div>
        </div>
    );
}

export default Work;