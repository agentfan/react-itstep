import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './home.js';
import Hill from './hill.js';
import Places from './places.js';
import Gallery from './gallery.js';
import Add from './add.js';

const Hw3 = ()=> {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Головна</Link>
                        </li>
                        <li>
                            <Link to="/hill">Пагорб слави</Link>
                        </li>
                        <li>
                            <Link to="/places">Цікаві місця міста</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Галерея</Link>
                        </li>
                        <li>
                            <Link to="/add">Додайти фото</Link>
                        </li>
                    </ul>
                </nav>
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
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Hw3;