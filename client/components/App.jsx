import React, { useState, useEffect } from 'react';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import NavBar from './NavBar'
import SearchMenu from './SearchMenu';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Images from './Images';
import details from '/database/sample-data.js';
import axios from 'axios';

function App() {
  const [searchMenu, setSearchMenu] = useState(false);
  const [modal, setModal] = useState(false)
  const [imageGallery, setImageGallery] = useState(false)

  // useEffect(() => {
  //   console.log(details)
  // })

  // axios.get('http://localhost:3030/getdetails')
  //   .then(()=> console.log('we got it'))
  //   .catch(()=> console.log('we dont got it'))

  const showMenu = () => {
    console.log('i am here')
    setSearchMenu(prevState => !prevState)
  }

  const showModal = () => {
    setModal(p=>!p)
  }

  const showGallery = () => {
    setImageGallery(p=> !p)
  }



  return (

    <div>
        {/* {imageGallery ? <Images showGallery={showGallery}/> :  null }
        {searchMenu ? <SearchMenu /> : <NavBar showMenu={showMenu}/>}
        <Header details={details}/>
        <PhotoGallery searchMenu={searchMenu} setModal={setModal} showGallery={showGallery}/> */}


<Router>
      <Switch>
        <Route path="/images" exact>
          <Images />
        </Route>

        <Route path="/" exact>
          {searchMenu ? <SearchMenu /> : <NavBar showMenu={showMenu}/>}
          <Header details={details}/>
          <PhotoGallery setModal={setModal} />
        </Route>

      </Switch>
  </Router>
</div>

  )
}

export default App