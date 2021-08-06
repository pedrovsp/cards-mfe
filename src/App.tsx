import React, { Component } from 'react';
import Cards from './screens/Cards';

import './style.css';

interface AppState {
  name: string;
}

class App extends Component<unknown, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return <Cards />;
  }
}

export default App;
