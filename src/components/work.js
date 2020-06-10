import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '300px',
        height: '500px',
        cursor: 'pointer',
        '& a': {
            textDecoration: 'none'
        }
    },
    img: {
        position: 'relative',
        height: '450px',
        padding: '0',
        borderRadius: '0.5rem',
        boxShadow: '0 0 0.5rem rgba(0,0,0,0.5)',
        overflow: 'hidden',
        '& img': {
            position: 'absolute',
            width: '100%',
            height: 'auto',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)'
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