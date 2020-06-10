import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '../utils/store';
import { withRouter} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem',
        height: 'calc(100vh - 7rem)',
        overflowY: 'auto',
        '& p': {
            fontFamily: 'TimesNewRoman, serif',
            fontSize: '1rem'
        }  
    },
    title: {
        fontFamily: 'TimesNewRoman, serif',
        padding: '1rem 0rem',
        fontSize: '2rem',
        fontStyle: 'italic',
        '& span':{
            fontSize: '1.5rem'
        }
    },
    img: {
        padding: '0',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },    
});

const ImgInfo = (props)=> {
    const {painter: [painter, setPainter]} = useContext(StoreContext);
    const classes = useStyles();

    const periodId = parseInt(props.match.params.period);
    console.log(periodId);
    const period = painter.periods.find(p => p.id === periodId);
    if(!period) return <div>Not found</div>;

    const id = parseInt(props.match.params.work);
    console.log(id);
    const work = period.works.find(w => w.id === id);
    if(!work) return <div>Not found</div>;

    return (
        <div className={classes.root}>
            <div className={classes.title}>{`"${work.title}"`} <span>{work.year}</span></div>
            <div className={classes.img}>
                <img src={`../images/${work.img}`} alt={work.title} />
            </div>
            <div>
                {work.notes.map(note => <p key={note.id}>{note.text}</p>)}
            </div>            
        </div>
    );
}

export default withRouter(ImgInfo);