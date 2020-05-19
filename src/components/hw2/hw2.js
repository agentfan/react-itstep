import React, { useState } from 'react';
import './hw2.css';
import Task1 from './task1/task1.js';
import Task2 from './task2/task2.js';
import Task3 from './task3/task3.js';

const Hw2 = ()=> {
    const [page, setPage] = useState(1);
    return (
        <div className="hw2">
            <header>
                <h1>React. Home Work 2</h1>
                <nav>
                    <ul>
                        <li className={page === 1 && "active"} onClick={()=>{page !== 1 && setPage(1)} }>Task 1</li>
                        <li className={page === 2 && "active"} onClick={()=>{page !== 2 && setPage(2)} }>Task 2</li>
                        <li className={page === 3 && "active"} onClick={()=>{page !== 3 && setPage(3)} }>Task 3</li>
                    </ul>
                </nav>
            </header>
            <div className={`task ${page === 1 && "active"}`}><Task1/></div>
            <div className={`task ${page === 2 && "active"}`}><Task2/></div>
            <div className={`task ${page === 3 && "active"}`}><Task3/></div>
            <footer>
                <div>WEB91 Viktor Nahornyi &copy;</div>
            </footer>
        </div>
    );
}

export default Hw2;