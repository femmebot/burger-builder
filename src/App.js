import React, { Component } from 'react';
import styles from './App.css';
import WithClass from './hoc/WithClass';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <WithClass styles={styles.App}>
        <Layout>
          <p>Lorem ipsum dolor sit amet.</p>
          <BurgerBuilder/>
        </Layout>
      </WithClass>
    );
  }
}

export default App;
