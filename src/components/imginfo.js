import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '../utils/store';
import { withRouter} from "react-router-dom";
import onLikeClicked from '../utils/onLikeClicked';

const useStyles = makeStyles({
    root: {
        maxWidth: '1200px',
        minWidth: '750px',
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
        display: 'flex',
        alignItems:'center',
        '& .year':{
            padding: '0 1rem',
            fontSize: '1.5rem'
        },
        '& .like': {
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            '& div:first-child': {
                padding: '0 0.5rem',
                height: '1.5rem',
                width: '2.5rem',
                '& img': {
                    height: '100%',
                    width: 'auto'
                }
            }
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
    const period = painter.periods.find(p => p.id === periodId);
    if(!period) return <div>Not found</div>;

    const id = parseInt(props.match.params.work);
    const work = period.works.find(w => w.id === id);
    if(!work) return <div>Not found</div>;

    const handleLikeClicked = ()=> {
        onLikeClicked(periodId, id, painter, setPainter);
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <div className="title">{`"${work.title}"`}</div>
                <div className="year">{work.year}</div>
                <div className="like" onClick={handleLikeClicked}>
                    <div><img src='../images/like.svg'/></div>
                    <div>{work.likes}</div>                 
                </div>
            </div>                
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