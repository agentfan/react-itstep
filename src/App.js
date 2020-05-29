import React, { useState, useEffect } from 'react';
import './App.css';
import { getAlbumId, getAlbumImages } from './utils/API.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [albumIdArray, setAlbumIdArray] = useState([]);
  const [albumImages, setAlbumImages] = useState([]);

  useEffect(() => {
    getAlbumId()
      .then(res => setAlbumIdArray(res.data.data));
  }, []);

  useEffect(() => {
    if (albumIdArray) {
      let tmpAlbumImages = [];
      let number = 0;
      albumIdArray.map((hash) => {
        getAlbumImages(hash)
          .then(res => {
            tmpAlbumImages.push(
              {
                id: hash,
                images: res.data.data
              }
            );
            number++;
            if(number == albumIdArray.length) setAlbumImages(tmpAlbumImages);
          });
      });
    }
  }, [albumIdArray]);

  return (
    <div>
      <Router>
        <nav>
          <ul>
            {albumIdArray.map(item =>
              <li>
                <Link key={item} to={`/${item}`}>{item}</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
            {albumImages.map(item => {
              return <Route key={item.id} path={`/${item.id}`}>
                <div>{item.id}</div>
              </Route>
            })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
