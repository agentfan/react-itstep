import React from 'react';
import Img from './img.js';

const images = [
    { id: 0, src: './hw3/1.jpg', about: `Готель "Слов'янський"`},
    { id: 1, src: './hw3/2.jpg', about: `Палац одруження`},
    { id: 2, src: './hw3/3.jpg', about: `Пагорб Слави`},
    { id: 3, src: './hw3/4.jpg', about: `Філармонія`},
    { id: 4, src: './hw3/5.jpg', about: `Долина троянд`}
];

const Gallery = ()=> {
    return (
        <>
            {images.map( img => <Img key={img.id} src={img.src} about={img.about}/>)}
        </>
    );
}

export default Gallery;