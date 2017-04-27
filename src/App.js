import React, { Component } from 'react';
import {incrementCount} from './actions/index'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.store.getState()
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(){
    console.log('handleClick start.')
    this.props.store.dispatch(incrementCount());
    console.log('handleClick end.')    
  }

  componentDidMount(){
    this.props.store.subscribe(this.handleChange)
  }

  handleChange(){
    this.setState({
      count: this.props.store.getState()
    })
  }

  render() {
    return (
      <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

export default App;
