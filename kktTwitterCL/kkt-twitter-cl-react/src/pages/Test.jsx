import React, { Component } from 'react';
import '../App.css';
import Timeline from '../component/Timeline';
import { Header } from '../component/Header';

class Test extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }
  // rendering
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  // rerendersするか？
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  // rerenderの前
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }
  // rerender
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  // 最後
  componentWillUnmount() {}
  constructor(props) {
    super(props);
    this.state = {
      value1: 'fkdasj;gksdaj',
      title: 'KKT_TWITTER'
    };
  }
  onGreet() {
    console.log(this.state.value1);
  }
  setTitle(xxx) {
    this.setState({ title: this.state.title + xxx });
    console.log(this.state.title);
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <Timeline
          name={'aaaa'}
          age={{ point: '23', isOver20: true }}
          greet={this.onGreet.bind(this)}
          setTitle={this.setTitle.bind(this)}
        />
      </div>
    );
  }
}

export default Test;
