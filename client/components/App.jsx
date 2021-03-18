import React from 'react';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import NavBar from './NavBar'
import NavBottom from './NavBottom'

function App() {
  return (
    <div>
      <NavBar />
      <NavBottom />
      <Header />
      <PhotoGallery />
    </div>
  )
}

export default App