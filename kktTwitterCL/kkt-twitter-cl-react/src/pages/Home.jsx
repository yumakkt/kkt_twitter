import React, { Component } from 'react';
import '../App.css';
import Timeline from '../component/Timeline';
import { Header } from '../component/Header';
import axios from 'axios';

class Home extends Component {
  async componentWillMount() {
    console.log(
      await axios.get(
        `${process.env.REACT_APP_KKT_TWITTER_SERVER_URL_ROOT}/tweet/`
      )
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      value1: 'fkdasj;gksdaj',
      title: 'KKT_TWITTER'
    };
  }

  render() {
    return <div />;
  }
}

export default Home;
