import React, { useState,useEffect,useCallback } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllFoodItems from './components/AllFoodItems';
import Cart from './components/Cart';
import Navbar from './components/NavBar';
import Home from '../../foodie/src/pages/Home';
import { cartContext } from './context/CartContext';


const App = () => {
  const [cartItems,setCartItems] = useState([]);
  const [countCartItems, setcountCartItems] = useState(0);
  const onCountCartItemsHandler = (count) => {
      setcountCartItems(count)
  }
  console.log(countCartItems);
  const fetchCartItemsHandler = useCallback(async () => {
    // setIsLoading(true);
    try {
      const response = await fetch(
        "https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong In cart Page..!..?");
      }

      const data = await response.json();
      const loadingData = [];
      for (const key in data) {
        loadingData.push({
          id: key,
          idMeal: data[key].idMeal,
          mealCost: data[key].mealCost,
          strMeal: data[key].strMeal,
          strMealThumb: data[key].strMealThumb,
          total: data[key].total,
        });
      }
      setCartItems(loadingData);
    } catch (error) {
      alert(error.message);
    }
  });

  useEffect(() => {
    fetchCartItemsHandler();
  }, []);

  return (
    <>
      <BrowserRouter>
      <cartContext.Provider value = {[cartItems,setCartItems]}>
        <Navbar count={countCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart count={onCountCartItemsHandler} />} />
        </Routes>
        </cartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App
