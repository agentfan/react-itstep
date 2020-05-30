import React, { useState, useEffect } from 'react';
import './App.css';
import { getAlbumId, getAlbumData } from './utils/API.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'grey'
  },
  nav: {
    '& ul': {
      display: 'flex',
      listStyle: 'none',
      '& li a': {
        padding: '1rem',
        textDecoration: 'none'
      }
    }
  }
});

const App = () => {
  const [albumIdArray, setAlbumIdArray] = useState([]);
  const [albumImages, setAlbumImages] = useState([]);

  useEffect(() => {
    getAlbumId()
      .then(res => setAlbumIdArray({id:res.data.data, title: ""}));
  }, []);

  useEffect(() => {
    if (albumIdArray) {
      let tmpAlbumImages = [];
      let number = 0;
      albumIdArray.map((album) => {
        return getAlbumData(album.id)
          .then(res => {
            album.title = res.data.title;
            tmpAlbumImages.push(
              {
                id: album.id,
                title: res.data.title,
                images: res.data.images
              }
            );
            number++;
            if (number === albumIdArray.length) setAlbumImages(tmpAlbumImages);
          })
          .catch(error => {
            console.log(`Error on get to ${album.id}: ${error}`);
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
                  <li>
                    <Link key={item.id} to={`/${item.id}`}>{item.title}</Link>
                  </li>
                )}
              </ul>
            </nav>
          </Grid>
          <Switch>
            {albumImages.map(item => {
              return <Route key={item.id} path={`/${item.id}`}>
                <Grid item xs={12} ms={6} xl={4}>
                  {item.images.map((img =>
                    <div key={img.id} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 0 0.5rem rgba(0,0,0,0.5)', margin: '1rem 0' }}>
                      <img src={img.link} style={{ width: '100%', height: 'auto' }} alt={img.id} />
                    </div>
                  ))}
                </Grid>
              </Route>
            })}
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
