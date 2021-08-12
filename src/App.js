// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import audioFile from './assets/707-clap.wav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      text: "",
      isOff: false,
      music: {
        Q: 'Heater-1',
        A: 'Heater-4',
        Z: "Kick-n'- Hat",
        W: 'Heater-2',
        S: 'Clap',
        X: 'Kick',
        E: 'Heater-3',
        D: 'Open HH',
        C: 'Closed HH'
      }    
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleOff = this.handleOff.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', (ev) => {
      console.log(ev.key)
      if(Object.prototype.hasOwnProperty.call(this.state.music, ev.key.toUpperCase()))
      {
        this.handlePlay(ev.key.toUpperCase())
      }
        
    })
  }

  handlePlay(key) {
    if(!this.state.isOff) {
      const audioElement = document.getElementById(key);
      audioElement.play();
      this.setState(state => ({ text: state.music[key] }))
    }

  }

  handleOff(ev) {
    this.setState(() => ({ isOff: !ev.target.checked }))
  }

  handleVolume(e) {
    console.log(e.target.value);
    if (!this.state.isOff) {
      this.setState({
          volumeVal: e.target.value,
      });
// setTimeout(() => this.clearDisplay(), 1000);          
//   }
}
  }

  
  

  render(){

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div className="drum-pad-container">
    
          <div>
              <div class="drum-pad" id="Heater-1" onClick={() => this.handlePlay('Q')}>
                <audio class="clip" id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>Q</p>
              </div>
              <div class="drum-pad" id="Heater-2" onClick={() => this.handlePlay('A')}>
                <audio class="clip" id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>A</p>
              </div>
              <div class="drum-pad" id="Heater-3" onClick={() => this.handlePlay('Z')}>
                <audio class="clip" id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>Z</p>
              </div>
          </div>
          <div>
              <div class="drum-pad" id="Heater-4" onClick={() => this.handlePlay('W')}>
                <audio class="clip" id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>W</p>
              </div>
              <div class="drum-pad" id="Heater-6" onClick={() => this.handlePlay('S')}>
                <audio class="clip" id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>S</p>
              </div>
              <div class="drum-pad" id="Open-HH" onClick={() => this.handlePlay('X')}>
                <audio class="clip" id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>X</p>
              </div>
          </div>
          <div>
              <div class="drum-pad" id="Kick-n'-Hat" onClick={() => this.handlePlay('E')}>
                <audio class="clip" id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>E</p>
              </div>
              <div class="drum-pad" id="Kick" onClick={() => this.handlePlay('D')}>
                <audio class="clip" id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>D</p>
              </div>

              <div class="drum-pad" id="Closed-HH" onClick={() => this.handlePlay('C')}>
                <audio class="clip" id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                <p style={{paddingTop: '4vh'}}>C</p>
              </div>
          </div>
        </div>
        <div className="display-container">

          <div id="power">
            <b>Power</b><br></br>
            <label className="switch">
              <input type="checkbox" checked={!this.state.isOff} onChange={this.handleOff}/>
                <span className="slider"></span>
            </label>
          </div>

          <div id="display-area">
            <div id="display">
              <p className="text-center">{this.state.text}</p>
            </div> 
          </div>
          <input type="range" class="form-range" id="customRange1" value={this.state.volumeVal} onChange={this.handleVolume}></input>

          

        </div>
        </div>
      </div>
      );
  }
}

      export default App;
