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
    <div style={{maxWidth: '1200px', margin: '0.5rem auto'}}>
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
              console.log(item);
              return <Route key={item.id} path={`/${item.id}`}>
                <div>
                  {item.images.map((img => 
                    <div style={{borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 0 0.5rem rgba(0,0,0,0.5)', margin: '1rem 0'}}>
                      <img src={img.link} style={{width: '100%', height: 'auto'}}/>
                    </div>
                  ))}
                </div>
              </Route>
            })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
