import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';

import './App.css';

const particlesOptions = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 1500
        }
      },
      line_linked: {
          enable: true,
          opacity: 0.02
      },
      move: {
          direction: "right",
          speed: 0.05
      },
      size: {
          value: 1
      },
      opacity: {
          anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
          }
      }
  },
  interactivity: {
      events: {
          onclick: {
              enable: true,
              mode: "push"
          }
      },
      modes: {
          push: {
              particles_nb: 1
          }
      }
  },
  retina_detect: true
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id:'',
    name:'',
    email:'',
    entries: 0,
    joined: ''
}
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }


loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name:data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }
  })
}
calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col*width),
    bottomRow: height - (clarifaiFace.bottom_row*height)
  }
}

displayFacebox = (box) => {
this.setState({box})
}

onInputChange = (event) => {
this.setState({input: event.target.value});
}
onSubmit = () => {
this.setState({imageUrl: this.state.input })
  fetch('https://findfaceapp.herokuapp.com/imageUrl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
  .then(response => {
    if (response) {
      fetch('https://findfaceapp.herokuapp.com/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {entries: count}))
    })
    .catch(err => console.log(err))
  }
    this.displayFacebox(this.calculateFaceLocation(response))
  })
  .catch(err => console.log(err));
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})
}

render() {
    return (
      <div className="App">
          <Particles className='particles'
              params={particlesOptions}
          />
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
          { this.state.route === 'home' 
            ? <div>
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries} />
                <ImageLinkForm 
                  onInputChange={this.onInputChange} 
                  onSubmit={this.onSubmit}/>
                <FaceRecognition 
                  box={this.state.box} 
                  imageUrl={this.state.imageUrl}/>
              </div>
            : (
              this.state.route === 'signin' 
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
          }
      </div>
    );
}
}

export default App;