import React from 'react';
import './task1.css';
import Songs from './songs.js';

const album = {
    name: "Музіка",
    group: "Воплі Відоплясова",
    frontman: "Олег Скрипка",
    edition: "S.B.A Production",
    year: 1997,
    img: "./hw2/task1/music.jpg",
    notes: `Виданий групою на честь завершення «французького періоду»
            та остаточного повернення на Батьківщину.
            Цей рок-альбом подорожував космосом у валізі
            першого українського космонавта Леоніда Каденюка.
            Містить трек «Весна», який суперновою вибухнув у серцях українців.`,
    songs: [
        { id: 1,  name: "Весна" },
        { id: 2,  name: "Юра" },
        { id: 3,  name: "Білі плями" },
        { id: 4,  name: "Музіка" },
        { id: 5,  name: "Краков’як рок" },
        { id: 6,  name: "Глибина" },
        { id: 7,  name: "Гармонія" },
        { id: 8,  name: "Гей! Любо!" },
        { id: 9,  name: "Боги" },
        { id: 10, name: "Галина" },
        { id: 11, name: "Їхали козаки" },
        { id: 12, name: "Горіла сосна" }
    ]
};

const Task1 = ()=> {
    return (
        <div className="task1">
            <h3 className="head">Мій улюблений музичний альбом</h3>
            <div className="name">{album.name}</div>
            <div className="group">
                <span className="title">Група: </span>
                <span className="text">{album.group}</span>
            </div>
            <div className="frontman">
                <span className="title">Фронтмен: </span>
                <span className="text">{album.frontman}</span>
            </div>
            <div className="edit">
                <span className="title">Випущений: </span>
                <span className="text">{`${album.year} рік, ${album.edition}`}</span>
            </div>
            <div className="notes">{album.notes}</div>
            <div className="img">
                <img src={album.img} alt="face of album"/>
            </div>
            <Songs list={album.songs}/>
        </div>
    );
}

export default Task1;