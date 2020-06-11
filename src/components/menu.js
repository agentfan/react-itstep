import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '../utils/store';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        position: 'sticky',
        top: '0',
        height: '7rem',
        margin: '0',
        '& > h1': {
            fontFamily: 'TimesNewRoman, serif',
            maxWidth: '1200px',
            minWidth: '750px',
            margin: '0 auto',
            height: '4rem',
            padding: '0 0.5rem 0rem',
            fontSize: '3rem',
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
        '& nav': {
            backgroundColor: 'brown',
            color: 'white',
            height: '3rem',
            padding: '0',
            margin: '0',
            boxShadow: '0 0.25rem 0.25rem rgba(0,0,0,0.4)',
            '& ul': {
                listStyle: 'none',
                maxWidth: '1200px',
                minWidth: '750px',
                height: '3rem',
                margin: '0 auto',
                padding: '0 0.5rem',
                display: 'flex',
                '& li': {
                    listStyle:'none',
                    padding: '1rem',
                    '& a': {
                        textTransform: 'uppercase',
                        color: 'white',
                        textDecoration: 'none',
                    }
                }
            }
        }
    },
});

const Menu = () => {
    const { painter: [painter, setPainter] } = useContext(StoreContext);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>{painter.name}</h1>
            <nav>
                <ul>
                    <li  key={-1}>
                        <Link to='/'>Головна</Link>
                    </li>
                    {painter.periods.map(p => 
                        <li key={p.id}><Link to={`/${p.id}`}>{p.title}</Link></li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;