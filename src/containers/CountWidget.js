import React, { Component } from 'react';
import {incrementCount} from '../actions/index'
import CountWidget from '../components/CountWidget';

export default class CountWidgetContainer extends Component {
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
  render(){
      return <CountWidget count={this.state.count} handleClick={this.handleClick} />
  }
}
