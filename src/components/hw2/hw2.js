import React, { useState } from 'react';
import './hw2.css';
import Menu from './menu.js';
import Main from './main.js';
import Task1 from './task1/task1.js';
import Task2 from './task2/task2.js';
import Task3 from './task3/task3.js';

const Hw2 = ()=> {
    const [page, setPage] = useState(0);

    return (
        <div className="hw2">
            <header>
                <h1>React. Home Work 2</h1>
                <Menu active={page} onSelect={setPage}>
                    <div>Task 1</div>
                    <div>Task 2</div>
                    <div>Task 3</div>
                </Menu>
            </header>
            <Main active={page}>
                <Task1/>
                <Task2/>
                <Task3/>
            </Main>
            <footer>
                <div>WEB91 Viktor Nahornyi &copy;</div>
            </footer>
        </div>
    );
}

export default Hw2;