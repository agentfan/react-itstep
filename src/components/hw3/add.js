import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '& h3': {
            textAlign: 'center',
            textTransform: 'uppercase'
        },
        '& .field': {
            padding: '1rem',
            fontSize: '1.2rem',
            display: 'grid',
            gridTemplateColumns: '100px 1fr',
            gap: '0.5rem',
            '& .label': {
                color: 'grey',
                textAlign: 'right',
                fontStyle: 'italic'
            },
            '& input': {
                width: '100%',
                fontSize: '1.2rem',
                border: 'none',
                borderBottom: '1px solid grey',
                backgroundColor: 'rgba(0,0,0,0.15)',
                padding: '0.25rem 0.5rem'
            }
        },
        '& .button': {
            textAlign: 'center',
            padding: '1rem',
            '& input': {
                fontSize: '1.2rem',
                padding: '0.25rem',
                width: '400px'
            }
        }
    }
});

const Add = () => {
    const classes = useStyles();

    const [login, setLogin] = useState("");
    const [password, setPassrowd] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [about, setAbout] = useState("");
    const [tags, setTags] = useState("");

    const handleLogin = (e) => {
        setLogin(e.target.value);
    }

    const handlePassword = (e) => {
        setPassrowd(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoto = (e) => {
        setPhoto(e.target.value);
    }

    const handleAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleTags = (e) => {
        setTags(e.target.value);
    }

    return (
        <form className={classes.root}>
            <h3>Додайте до галереї нове фото</h3>
            <div className="field">
                <div className="label">
                    <label htmlFor="login">Login:</label>
                </div>
                <div>
                    <input name="login" type="text" value={login} onChange={handleLogin} />
                </div>
            </div>
            <div className="field">
                <div className="label">
                    <label htmlFor="password">Password:</label>
                </div>
                <div>
                    <input name="password" type="password" value={password} onChange={handlePassword} />
                </div>
            </div>
            <div className="field">
                <div className="label">
                    <label htmlFor="email">E-mail:</label>
                </div>
                <div>
                    <input name="email" type="email" value={email} onChange={handleEmail} />
                </div>
            </div>
            <div className="field">
                <div className="label">
                    <label htmlFor="photo">File:</label>
                </div>
                <div>
                    <input name="photo" type="file" value={photo} onChange={handlePhoto} />
                </div>
            </div>
            <div className="field">
                <div className="label">
                    <label htmlFor="about">About:</label>
                </div>
                <div>
                    <input name="about" type="text" value={about} onChange={handleAbout} />
                </div>
            </div>
            <div className="field">
                <div className="label">
                    <label htmlFor="tags">Tags:</label>
                </div>
                <div>
                    <input name="tags" type="text" value={tags} onChange={handleTags} />
                </div>
            </div>
            <div className="button">
                <div>
                    <input type="button" value="Додати" />
                </div>
            </div >
        </form >
    );
}

export default Add;