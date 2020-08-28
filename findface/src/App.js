import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
    </div>
  );
}

export default App;
