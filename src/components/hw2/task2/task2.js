import React from 'react';
import './task2.css';
import Img from './img.js';
import Data from './data.js';
import Skills from './skills.js';

const person = {
    data: {
        name: "Ілон",
        surname: "Маск",
        age: 48,
        phone: "+38 (050) 555-55-55",
        mail: "maskitto@gmail.com",
        city: "Киів",
        experience: "23 роки роботи в сфері космічних досліджень"
    },
    skills: [
        {id: 1, skill: "астрономія (23 роки)"},
        {id: 2, skill: "квантова фізика (5 років)"},
        {id: 3, skill: "іноземні мови: англійська, іспанська, німецька"},
        {id: 4, skill: "вища економічна освіта (магістр економіки)"},
        {id: 5, skill: "17 успішних запусків ракет з поверненням перших ступеней для повторного використання"},
        {id: 6, skill: "досвід у догляді за котиком (3 роки)"}
    ],
    photo: "./hw2/task2/photo.svg"
};

const Task2 = ()=> {
    return (
        <div className="task2">
            <h3 className="head">Персональна сторінка</h3>
            <Img className="photo" path={person.photo}/>
            <Data className="data" data={person.data}/>
            <Skills className="skills" skills={person.skills}/>
        </div>
    );
}

export default Task2;