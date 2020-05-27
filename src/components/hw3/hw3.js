import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Home from './home.js';
import Hill from './hill.js';
import Places from './places.js';
import Gallery from './gallery.js';
import Add from './add.js';

const colorOfNavHover = 'rgb(236, 135, 135)';

const useStyles = makeStyles({
    root: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        margin: '0',
        padding: '0',
        '& header': {
            position: 'sticky',
            top: '0',
            backgroundColor: 'white',
            zIndex: '100',
            '& .upheader': {
                maxWidth: '1200px',
                minWidth: '650px',
                margin: '0 auto',
                padding: '1rem',
                height: '4rem',
                color: 'brown',
                fontSize: '2rem'
            },
            '& nav': {
                backgroundColor: 'rgb(24,24,24)',
                padding: '0',
                margin: '0',
                boxShadow: '0 0.25rem 0.5rem rgba(0,0,0,0.3)',
                minWidth: '650px',
                '& ul': {
                    listStyle: 'none',
                    height: '3rem',
                    margin: '0 auto',
                    padding: '0 0.5rem',
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyItems: 'flex-start',
                    '& li a': {
                        display: 'block',
                        padding: '1rem',
                        height: '100%',
                        textDecoration: 'none',
                        textAlign: 'center',
                        color: 'white',
                        '&:hover': {
                            color: colorOfNavHover
                        },
                        '&.active': {
                            color: colorOfNavHover,
                            borderBottom: `4px solid ${colorOfNavHover}`                            
                        }
                    }
                }
            }
        },
        '& main': {
            margin: '0 auto',
            padding: '0 0.5rem',
            maxWidth: '1200px',
            minWidth: '650px',
        },
        '& footer': {
            margin: '0 auto',
            backgroundColor: 'brown',
            color: 'white',
            '& div': {
                height: '3rem',
                margin: '0 auto',
                padding: '1rem 0.5rem',
                maxWidth: '1200px',
                minWidth: '650px'
            }
        }
    }
});

const Hw3 = ()=> {
    const classes = useStyles();
    console.log(classes);
    return (
        <Router>
            <CssBaseline />
            <div className={classes.root}>
                <header>
                    <div className="upheader">Чарівне місто Черкаси</div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">Головна</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hill" activeClassName="active">Пагорб слави</NavLink>
                            </li>
                            <li>
                                <NavLink to="/places" activeClassName="active">Цікаві місця міста</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" activeClassName="active">Галерея</NavLink>
                            </li>
                            <li>
                                <NavLink to="/add" activeClassName="active">Додати фото</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Switch>
                        <Route path="/hill">
                            <Hill/>
                        </Route>
                        <Route path="/places">
                            <Places/>
                        </Route>
                        <Route path="/gallery">
                            <Gallery/>
                        </Route>
                        <Route path="/add">
                            <Add/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                    </Switch>
                </main>
                <footer>
                    <div>REACT. Home Work. WEB91 Viktor Nahornyi &copy;</div>
                </footer>
            </div>
        </Router>
    );
}

export default Hw3;