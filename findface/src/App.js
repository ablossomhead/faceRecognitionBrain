import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '28fbea51ce7b4b168ef8ba07dbee218c'
 });

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
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
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
    console.log(box)
    this.setState({box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onSubmit = () => {
    this.setState({imageUrl: this.state.input })
    app.models
      .predict( 
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFacebox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
}
  render() {
    return (
      <div className="App">
          <Particles className='particles'
              params={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
