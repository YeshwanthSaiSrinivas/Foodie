import React, { Fragment} from 'react'
import classes from './css/Navbar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const Navbar = (props) => {

  const [cartItems] = useContext(cartContext);
  const NoOfItems = cartItems.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <Fragment >
      <header className={classes.header}>
        <h3>
        <button className={classes.button}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </button>
        </h3>
        <h3>
        <button className={classes.button}>
          <span className={classes.icon}></span>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            Your Cart
          </Link>
          <span className={classes.badge}>{NoOfItems}</span>
        </button>
        </h3>
      </header>
      <div className={classes.foodItems}></div>
    </Fragment>
  );
}

export default Navbar
