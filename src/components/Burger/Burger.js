import React from 'react';
import styles from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top"/>
      <BurgerIngredients type="greens"/>
      <BurgerIngredients type="cheese"/>
      <BurgerIngredients type="meat"/>
      <BurgerIngredients type="bread-bottom"/>
    </div>
  );
};

export default burger;
