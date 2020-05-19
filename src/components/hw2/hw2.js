import React, { useState } from 'react';
import './hw2.css';
import MenuItem from './menuitem.js';
import Page from './page.js';
import Task1 from './task1/task1.js';
import Task2 from './task2/task2.js';
import Task3 from './task3/task3.js';

const Hw2 = ()=> {
    const [page, setPage] = useState(1);

    const onSelected = (id)=> {
        if(id !== page) {
            setPage(id);
        }
    }

    return (
        <div className="hw2">
            <header>
                <h1>React. Home Work 2</h1>
                <nav>
                    <ul>
                        <MenuItem id={1} active={page} click={onSelected}>Task 1</MenuItem>
                        <MenuItem id={2} active={page} click={onSelected}>Task 2</MenuItem>
                        <MenuItem id={3} active={page} click={onSelected}>Task 3</MenuItem>
                    </ul>
                </nav>
            </header>
            <Page id={1} active={page}><Task1/></Page>
            <Page id={2} active={page}><Task2/></Page>
            <Page id={3} active={page}><Task3/></Page>
            <footer>
                <div>WEB91 Viktor Nahornyi &copy;</div>
            </footer>
        </div>
    );
}

export default Hw2;