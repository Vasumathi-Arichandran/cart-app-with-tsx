
import './App.css';
import React from 'react'

import { useCallback, useEffect, useReducer } from 'react';
import { Reducer } from './components/Reducer';
import { Products } from './components/Products';
import { ShowProducts } from './components/ShowProducts';
import Sample from './components/Sample';
function App() {
  const [state,dispatch]=useReducer(Reducer,{products:[],showDetails:[],addedProducts:[],});
  console.log(state);
 
  
  const fetchProducts=async()=>{
  //   const {data}=await axios.get("https://dummyjson.com/products");
  // console.log(data.products);

 const dataOriginal= await fetch("https://dummyjson.com/products");
const responseOriginal=await dataOriginal.json();
console.log(responseOriginal);

  const data= await fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json");
  const response=await data.json();
 console.log(response);

 const loadedProducts=[];
 for(const key in response){
     loadedProducts.push({
         id:key,
         title:response[key].title,
         description:response[key].description,
         price:response[key].price,
         link:response[key].link,

     })
 }
 console.log(loadedProducts)

 dispatch({
  type:"ADD_PRODUCTS",
  payload:loadedProducts,
 })

 dispatch({
  type:"ADD_ORIGINAL_PRODUCTS",
  payload:responseOriginal.products,
 })
}

  useEffect(()=>{
    console.log("triggered");
fetchProducts();
  },[])

  
  return (
    <div className="App">
 
   <Products state={state} dispatch={dispatch}/>
   <ShowProducts state={state} dispatch={dispatch}/>

    </div>
  );
}

export default App;

