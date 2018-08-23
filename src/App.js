import React, { Component } from 'react';
import styles from './App.css';
import Layout from './components/Layout/Layout';
import WithClass from './hoc/WithClass';

class App extends Component {
  render() {
    return (
      <WithClass styles={styles.App}>
        <Layout>
        <p>Lorem ipsum dolor sit amet.</p>
          </Layout>
      </WithClass>
    );
  }
}

export default App;
