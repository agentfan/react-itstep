import React, { useState, useEffect } from 'react';
import './App.css';
import { getAlbumId, getAlbumData } from './utils/API.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  nav: {
    margin: '0',
    padding: '0',
    '& ul': {
      margin: '0',
      display: 'flex',
      listStyle: 'none',
      backgroundColor: 'brown',
      padding: '1rem',
      '& li a': {
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        padding: '1rem',
        textDecoration: 'none',
        color: 'white'
      },
      '& li a:hover': {
        textShadow: '0 0 0.5rem yellow'
      },
    }
  },
  img: {
    borderRadius: '1rem',
    height: '100%',
    overflow: 'hidden',
    boxShadow: '0 0 0.5rem rgba(0,0,0,0.5)',
    margin: '0.5rem',
    padding: '0.5rem',
    '& img': {
      width: '100%',
      height: 'auto',
      borderRadius: '0.5rem',
    }
  }
});

const App = () => {
  const [albumIdArray, setAlbumIdArray] = useState([]);
  console.log("IDArray:",albumIdArray);
  const [albumImages, setAlbumImages] = useState([]);
  console.log("Images:",albumImages);

  useEffect(() => {
    getAlbumId()
      .then(res => {
        const tmpArray = res.data.data.map( item => {return {id: item, title:""};});
        setAlbumIdArray(tmpArray);
      });
  }, []);

  useEffect(() => {
    if (albumIdArray) {
      let tmpAlbumImages = [];
      let number = 0;
      albumIdArray.map( album => {
        return getAlbumData(album.id)
          .then(res => {
            console.log("res:",res);
            album.title = res.data.data.title;
            tmpAlbumImages.push(
              {
                id: album.id,
                title: res.data.data.title,
                images: res.data.data.images
              }
            );
          })
          .finally(() => {
            number++;
            if (number === albumIdArray.length) setAlbumImages(tmpAlbumImages);
          });
      });
    }
  }, [albumIdArray]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Router>
          <Grid item xs={12}>
            <nav className={classes.nav}>
              <ul>
                {albumIdArray.map(item =>
                  <li key={item.id}>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                  </li>
                )}
              </ul>
            </nav>
          </Grid>
          <Switch>
            {albumImages.map(item => {
              return (
              <Route key={item.id} path={`/${item.id}`}>
                  {item.images.map((img =>
                    <Grid key={img.id} xs={12} sm={6} md={4}>
                      <div className={classes.img}>
                        <img src={img.link} alt={img.id} />
                      </div>
                    </Grid>
                  ))}
              </Route>
              )
            })}
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
