/* eslint-disable prefer-const */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import NavBar from './NavBar';
import SearchMenu from './SearchMenu';
import Images from './Images';
import details from '../../database/sample-data';

function App() {
  const [searchMenu, setSearchMenu] = useState(false);
  let [airbnbSite, setAirbnbSite] = useState(details);

  useEffect(() => {
    axios.get('http://localhost:3000/getdetails/10001')
      .then((res) => {
        setAirbnbSite(airbnbSite = res.data);
      })
      .catch((err) => {
        console.log('error at axios get request', err);
      });
  }, []);

  const showMenu = () => {
    setSearchMenu((prevState) => !prevState);
  };

  return (

    <div>
      <Router>
        <Switch>
          <Route path="/images" exact>
            <Images />
          </Route>

          <Route path="/" exact>
            {searchMenu ? <SearchMenu /> : <NavBar showMenu={showMenu} />}
            <Header airbnbSite={airbnbSite} />
            <PhotoGallery searchMenu={searchMenu} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
