
import './App.css';
import React, { useState } from 'react'
import {BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
import { useCallback, useEffect, useReducer } from 'react';
import { Reducer } from './components/Reducer/Reducer';
import { Products } from './components/Main/Products';
import { ShowProducts } from './components/Main/ShowDetails';


function App() {
  const [state,dispatch]=useReducer(Reducer,{products:[],showDetails:[],addedProducts:[],});
  console.log(state);
 const [products,setProducts]=useState([{}])
  
  const fetchProducts=async()=>{
  //   const {data}=await axios.get("https://dummyjson.com/products");
  // console.log(data.products);

 const dataOriginal= await fetch("https://dummyjson.com/products");
const responseOriginal=await dataOriginal.json();


  const data= await fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json");
  const response=await data.json();


 const loadedProducts=[];
 for(const key in response){
     loadedProducts.push({
         id:key,
         title:response[key].title,
         description:response[key].description,
         price:response[key].price,
         link:response[key].link,

     })
     setProducts(loadedProducts)
 }


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
 
 <Router>
  <Routes>
  <Route path="/" element={ <><Products state={state} dispatch={dispatch}/> <ShowProducts state={state} dispatch={dispatch}/></>}>
 
  {/* <Products state={state} dispatch={dispatch}/>
   <ShowProducts state={state} dispatch={dispatch}/> */}

  </Route>
  </Routes>
 </Router>
   

   
  );
}

export default App;

