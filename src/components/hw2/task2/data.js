import React from 'react';
import DataItem from './dataitem.js';

const Data = ({className, data})=> {
    const { name, surname, age, phone, mail, city, experience } = data;

    return (
        <div className={className}>
            <DataItem key={1} name="Ім'я" text={name}/>
            <DataItem key={2} name="Прізвище" text={surname}/>
            <DataItem key={3} name="Вік" text={`${age} років`}/>
            <DataItem key={4} name="Телефон" text={phone}/>
            <DataItem key={5} name="Пошта" text={mail}/>
            <DataItem key={6} name="Місто" text={city}/>
            <DataItem key={7} name="Досвід" text={experience}/>
        </div>
    );
}

export default Data;