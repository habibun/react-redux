import React, { Component } from 'react';
import CountWidgetContainer from '../containers/CountWidget';

class App extends Component {
  render() {
    return (
      <div>
        <CountWidgetContainer store={this.props.store}/>
      </div>
    );
  }
}

export default App;
