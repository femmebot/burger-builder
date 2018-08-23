import React, { Component } from 'react';
import styles from './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <p>Lorem ipsum dolor sit amet.</p>
        </Layout>
      </div>
    );
  }
}

export default App;
