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
    <Router>
    <div>
      {searchMenu ? <SearchMenu /> : <NavBar showMenu={showMenu}/>}
      {modal ? <h1> this one</h1> : null}
      <Header />
      <PhotoGallery setModal={setModal}/>
      {/* <Switch> */}
      {/* <Route path="/" component={Images} />
      </Switch> */}
    </div>
    </Router>
  )
}

export default App