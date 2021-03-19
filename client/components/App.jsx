import React, { useState } from 'react';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import NavBar from './NavBar'
import SearchMenu from './SearchMenu';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Images from './Images'

function App() {
  const [searchMenu, setSearchMenu] = useState(false);
  const [modal, setModal] = useState(false)
  const showMenu = () => {
    console.log('i am here')
    setSearchMenu(prevState => !prevState)
  }

  const showModal = () => {
    setModal(p=>!p)
  }



  return (

    <div>


<Router>
      <Switch>
        <Route path="/images" exact>
          <Images />
        </Route>

        <Route path="/" exact>
          {searchMenu ? <SearchMenu /> : <NavBar showMenu={showMenu}/>}
          <Header />
          <PhotoGallery setModal={setModal}/>
        </Route>

      </Switch>
  </Router>
</div>

  )
}

export default App