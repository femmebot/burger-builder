import React, { Component } from 'react';
import styles from './BurgerIngredients.css';
import PropTypes from 'prop-types';
// to enable proptypes: npm install --save prop-types

// convert to class (albeit, stateless) in order to use PropTypes
// const burgerIngredient = (props) => {
class BurgerIngredient extends Component {

  render () {

    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        )
        break;
      case ('meat'):
        ingredient = <div className={styles.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case ('greens'):
        ingredient = <div className={styles.Greens}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={styles.Bacon}></div>;
        break;
    }
  }

  BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
  };


export default BurgerIngredient;
