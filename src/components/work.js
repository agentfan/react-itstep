import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

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
    }
});

const Work = ({ period, work }) => {
    const classes = useStyles();

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
        </div>
    );
}

export default Work;