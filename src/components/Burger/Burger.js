import React from 'react';
import styles from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  // object of key value pairs converted into an array object
  // value of object needed to determine # of each ingredient
  const transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />
      });
    });
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"/>
    </div>
  );
};

export default burger;
