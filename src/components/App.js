import React from 'react';
import './App.css';
import { EosService } from '../api/EosService';
import { BlockLis } from './BlockList';
import Button from 'react-bootstrap/Button';
import eosLogo from '../eos_logo.png';



const eosService = new EosService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      error:''
    };
    this.updateInfoHandler = this.updateInfo.bind(this, true);
  }

  componentDidMount() {
    this.updateInfo();
  }
  async updateInfo() {
    try {
      const blocks = await eosService.getMostRecentBlocks()
      this.setState({ blocks, error: '' });
    } catch (e) {
      this.setState({ blocks: [], error: 'Oops, Something is wrong. Please try again later!' });
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div>
            <img src={eosLogo}  alt="logo" />
            <Button variant="primary" className="load-btn" onClick={this.updateInfoHandler}>Load</Button>
          </div>
          <BlockLis blocks={this.state.blocks} />

        </header>
      </div>
    );
  }
}

export default App;
