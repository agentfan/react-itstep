import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '0',
        padding: '0',
        '& p': {
            textAlign: 'justify'
        },
        '& div.img-wrapper': {
            padding: '0.5rem 0',
            '& img': {
                width: '100%',
                height: 'auto'
            },
            '& div': {
                fontStyle: 'italic'
            }
        }
    }
});

const Img = ({src, about})=> {
    return (
        <div className="img-wrapper">
            <img src={src} alt={about}/>
            <div>{about}</div>
        </div>
    );
}

const Home = ()=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>
                <strong>Черка́си</strong> — місто, обласний та районний центр в Україні,
                промисловий центр Центрального економічного району,
                значний культурний та освітній осередок.
                Місто відоме з XIII століття і за час свого існування
                відіграло певну роль в історії всієї України.
                Черкаси були осередком формування Козаччини,
                мешканці міста брали безпосередню участь в Хмельниччині та Коліївщині.
                Зростання міста, після отримання статусу обласного центру,
                призвело до перетворення його у великий промисловий центр
                і головний культурний осередок цілого регіону.
            </p>
            <Img src="./hw3/1.jpg" about={`Готель "Слов'янський"`}/>
        </div>
    );
}

export default Home;