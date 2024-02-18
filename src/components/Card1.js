import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import classes from "../components/css/Card.module.css";
import { cartContext } from "../context/CartContext";
import { useContext } from "react";

const Card1 = (props) => {
  const [error, setError] = useState(null);
  const [cartItems,setCartItems] = useContext(cartContext);

  const addToCartHandler = async (item) => {
    try {
      const itemExist = cartItems.find((i) => i.idMeal === item.idMeal);
      if(itemExist) {
        itemExist.total++;
      
        const response = await fetch(
          `https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems/${itemExist.id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(itemExist),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("something went wrong in updating");
        }
        // in cartItems set for that id item update the count 
        const newCartItems = cartItems.map((i) => {
          if(i.id === itemExist.id) {
            return itemExist;
          }
          return i;
        });
        setCartItems(newCartItems);
        return;
      }
      else{
        item.total = 1;
      }
      const response = await fetch(
        "https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCartItems([...cartItems, item]);
      if (!response.ok) {
        throw new Error("something went wrong in posting");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <div className="p-3" style={{textAlign:"center",background:"light-blue"}}><h1>Menu</h1></div>
    <div className={classes.container}>
      {props.items.map((item) => {
        return (
          <div>
            <Card style={{ width: "18rem", boxShadow: "1px 2px 3px gray" }}>
              <Card.Img
                style={{ height: "300", width: "300" }}
                variant="top"
                src={item.strMealThumb}
              />
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Card.Title>{item.strMeal}</Card.Title>
                <Card.Title> ₹{item.mealCost}</Card.Title>
              </div>
              <div>
                <button
                  onClick={addToCartHandler.bind(null, item)}
                  className="btn btn-primary"
                  
                >
                  Add to cart
                </button>
                


              </div>
            </Card>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Card1;
