import React, { Component } from 'react';
import axios from 'axios'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Timeline extends Component {
  // おそらくここのrenderの値が読まれる

  constructor(props) {
    super(props);
    this.state = {
      value1: 'foo',
      value2: [ 'bar', 'baz' ],
      name: props.name
    };
  }

    handleClick(e) {
      this.setState({name:this.state.name + "aaa"})
    }

    setInputWord(e){
      console.log(e.target.value)
    }
    render() {
      return (
        <div className="Timeline">
            <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>{this.state.name}</Button>
            <hr/>
            <Button variant="contained" color="primary" onClick={this.props.greet}>greet</Button>
            <hr/>
            <Button variant="contained" color="primary" onClick={this.props.setTitle.bind(this, this.props.name)}>setTitle</Button>
            <hr/>
            <Input type="text" placeholder="名前入れてね" onChange={(e) => this.setInputWord(e)}/>
        </div>
      );
    }
  }
  export default Timeline;