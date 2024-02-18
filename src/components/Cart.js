import React, { useState, useEffect, useCallback } from "react";
import classes from '../components/css/Cart.module.css'
import Card2 from "./Card2";
import Card from 'react-bootstrap/Card' 
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Cart = (props) => {
  const [cartItems, setCartItems] = useContext(cartContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchCartItemsHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems.json"
  //     );  
  //     if (!response.ok) {
  //       throw new Error("Something Went Wrong In cart Page..!..?");
  //     }

  //     const data = await response.json();
  //     const loadingData = [];
  //     for (const key in data) {
  //       loadingData.push({
  //         id: key,
  //         idMeal: data[key].idMeal,
  //         mealCost: data[key].mealCost,
  //         strMeal: data[key].strMeal,
  //         strMealThumb: data[key].strMealThumb,
  //         total: data[key].total,
  //       });
  //     }
  //     setCartItems(loadingData);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // });

  // useEffect(() => {
  //   fetchCartItemsHandler();
  // }, []);

  
   let content = <p>Cart Items Not Found .</p>;
   if (isLoading) {
     content = (
       <center>
         <h2>Loading...</h2>
       </center>
     );
   }
  if (cartItems.length > 0) {
    content = <Card2 items={cartItems} />;
    props.count(cartItems.length);
   }
   if (error) {
     content = <p>{error}</p>;
   }
  
  var totalAmount = 0;

  const alertHandler = () => {
      alert('Order Successfull..!')
   };

  return (
    <div>
      {content}
      <div className={classes.orderBoxContainer}  style={{alignItems:"center"}}>
        <div className="row justify-content-center" style={{alignItems:"center"}}>



        <Card style={{ width: "22rem" }} className={classes.orderBoxContainer}>
        <Card.Body>
          <Card.Title style={{ color: "green",textAlign:"center" }}>Bill</Card.Title>
          <Card.Text style={{color:"black"}}>

            <div className={classes.orderBoxContainer}>
        <div className={classes.orderBox}>
          {cartItems.map((item) => {
            totalAmount = totalAmount + item.total * item.mealCost;
            return (
              <h5>
                <button>{item.strMeal}</button>  Cost : {item.mealCost} per 1
                <p style={{color:"black"}}>total= ₹{item.total * item.mealCost}</p>
              </h5>
            );
          })}
          <p style={{color:"black"}}><h4>Grand Total = ₹ {totalAmount} </h4></p>
          <button
            onClick={alertHandler}
            type="button"
            class="btn btn-success btn-lg"
          >
            Order Now
          </button>
        </div>
      </div>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </div>
      </div>
  );
};

export default Cart;
