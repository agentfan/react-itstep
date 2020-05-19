import React from 'react';

const album = {
    name: "Музіка",
    group: "Воплі Відоплясова",
    img: "./hw2/task1/music.jpg",
    notes: `Цей рок-альбом подорожував космосом у валізі
            першого українського космонавта Леоніда Каденюка.
            Містить трек «Весна», який суперновою вибухнув у серцях українців`,
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
        <>
            <h3>Мій улюблений музичний альбом</h3>
            <div className="name">{album.name}</div>
            <div className="group">{album.group}</div>
            <div className="group">{album.notes}</div>
            <div className="img">
                <img src={album.img}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Пісня</th>
                    </tr>
                </thead>
                <tbody>
                    {album.songs.map(({id,name,duration})=>{
                        return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Task1;