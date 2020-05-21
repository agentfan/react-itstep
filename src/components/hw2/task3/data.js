import React, { useState } from 'react';
import DataInput from './datainput.js';
import DataTextarea from './datatextarea.js';

const Data = ({className, data})=> {
    const [name, setName] = useState(data.name);
    const [surname, setSurname] = useState(data.surname);
    const [age, setAge] = useState(data.age);
    const [phone, setPhone] = useState(data.phone);
    const [mail, setMail] = useState(data.mail);
    const [city, setCity] = useState(data.city);
    const [experience, setExperience] = useState(data.experience);

    const onRestore = () => {
        setName(data.name);
        setSurname(data.surname);
        setAge(data.age);
        setPhone(data.phone);
        setMail(data.mail);
        setCity(data.city);
        setExperience(data.experience);
    }

    const onNameChanged = (e) => {
        setName(e.target.value);
    }

    const onSurnameChanged = (e) => {
        setSurname(e.target.value);
    }

    const onAgeChanged = (e) => {
        let a = parseInt(e.target.value);
        if(a!=a) return;
        setAge(a);
    }

    const onPhoneChanged = (e) => {
        setPhone(e.target.value);
    }

    const onMailChanged = (e) => {
        setMail(e.target.value);
    }

    const onCityChanged = (e) => {
        onCityChanged(e.target.value);
    }

    const onExperienceChanged = (e) => {
        setExperience(e.target.value);
    }

    return (
        <form className={className}>
            <DataInput key={1} name="Ім'я" text={name} change={onNameChanged}/>
            <DataInput key={2} name="Прізвище" text={surname} change={onSurnameChanged}/>
            <DataInput key={3} name="Вік (років)" text={age} change={onAgeChanged}/>
            <DataInput key={4} name="Телефон" text={phone} change={onPhoneChanged}/>
            <DataInput key={5} name="Пошта" text={mail} change={onMailChanged}/>
            <DataInput key={6} name="Місто" text={city} change={onCityChanged}/>
            <DataTextarea  key={7} name="Досвід" text={experience} change={onExperienceChanged}/>
            <div className="restore">
                <div><input type="button" value="Відновити початкові дані" onClick={onRestore}/></div>
            </div>
        </form>
    );
}

export default Data;